import Knex from 'knex'
//faco as alteracoes
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
      table.increments('id').primary();

      table.integer('week_day').notNullable();
      table.integer('from').notNullable();  
      table.integer('to').notNullable();  

      table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
}

//desfaco as alteracoes
export async function down(knex: Knex){
    return knex.schema.dropTable('classes')
}