import {Request, Response} from 'express'

import db from '../database/connections';
import convertHourToMinutes from '../uteis/convertHourToMinutes';

interface ScheduleItem{
    week_day: number;
    from: string;
    to: string;
}


export default class ClassesController{

    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day||!filters.subject||!filters.time){
            return response.status(400).json({
                error: 'missin filters to search classes'
            })   
        }
        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
            .where('classes.subject', '=', subject)
            .join('users','classes.user_id', '=', 'users.id')//inner join
            .select(['classes.*','users.*'])

        return response.json(classes);
    }


    async create(request:Request , response:Response){// uma funcao callbeck que se o response tiver retorno true ele continua
        /*const data = request.body;
        console.log(data)*/
        
            const{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        
        const trx = await db.transaction();
        
        try{
            const insertdUsersIds = await trx('users').insert({
                name,//nome:nome
                avatar,
                whatsapp,
                bio,
            })
            
            const user_id = insertdUsersIds[0];
            const inserUserIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })
            
            
            const class_id = inserUserIds[0];
            
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
            
                }
            })
            
                await trx('class_schedule').insert(classSchedule)
            
            
                await trx.commit();//SO NESSE MOMENTO QUE ELE INCERE TUDO NO BANCO
            
                return response.status(201).send();//201 significa criadop com sucesso
        }catch(err){
            console.log(err)
        
            await trx.rollback();
        
            return response.status(400).json({
                error: 'unexpect wrror while creating new class'
            })
        }
        }
}