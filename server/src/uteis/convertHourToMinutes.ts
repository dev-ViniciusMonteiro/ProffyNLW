export default function convertHourToMinutes(time: string){
    //8:00

    const [hour, minutes] = time.split(':').map(Number)//pega um array divide ele onde tem : e transdorma suas strings em numeros e os numeros antes do : sera denominado hora e o os depois do : sera denominado minuto
    const timeInMinutes = (hour*60)+minutes
    
    return timeInMinutes
}