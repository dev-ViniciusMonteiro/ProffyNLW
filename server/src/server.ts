import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();//tudo vai partir desse app ->expres 'e uma funcao

app.use(cors())

app.use(express.json());

app.use(routes);

//toda porta padrao e 80 , endereco sera localhost:3333 por causa do parametro
app.listen(3333); // esse meto vai fazer nossa aplicacao ouvir requisicoes http

/*rota: 'e o endereco de nossa aplicacao ex http://localhost:3333/users
recurso: 'e o enderecamento da rota(nome final) ex /users 
metodos: 
get = buscar ou listar uma informacao
post = criar alguma nova informacao
put = atualixar uma informacao existente
delete = deleta uma informacao existente*/

//acessando para teste localhost:3333/users
//listem envia um protocolo http 
// request - recebe o cabecario, o corpo(dados vindo pelo front-end)
//response a resposta que vou devolver do beck para o front
/*app.get(('/users'), (request, response) =>{// uma funcao callbeck que se o response tiver retorno true ele continua
    console.log(request.body); // precisa do app.use(express.json());
    const users = [//crio uma variavel usuario com um json
        {name: 'Diego', age: 25},//json
        {name: 'vinicius', age: 22},//json
        {name: 'Fulano', age: 29},//json
    ];
    
    return response.json(users)//retorna o response se true tudo certo
});//request 'e uma requisicao feita no servidor a todo momento caso retorn false para a funcao callbeck e da erro
*/
//corpo (rquest body)- dados para criacao ou alteracao de um registro
//route params: identificar qual o recurso eu quero atualizar ou deletar
//Query params: paginacao, filtros, ordernar

/*app.get(('/'), (request, response) =>{// uma funcao callbeck que se o response tiver retorno true ele continua
    
    return response.json({message: 'ola mundo'})
}); */


