import Knex from 'knex'
//faco as alteracoes
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
      table.increments('id').primary();
      table.string('subject').notNullable();  
      table.decimal('cost').notNullable();  

      table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
}

//desfaco as alteracoes
export async function down(knex: Knex){
    return knex.schema.dropTable('classes')
}