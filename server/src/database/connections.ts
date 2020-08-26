import knex from 'knex';
import path from 'path'


//migrations -- controla as versoes do banco de dados(sem passr banco de um pro outro so rodar)

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;