/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('usuarios', table => {
            table.increments('id').primary()
            table.string('nome').notNullable()
            table.string('email').notNullable().unique()
            table.string('senha', 60).notNullable()
            table.boolean('ativo')
                .notNullable()
                .defaultTo(true)


            table.timestamp('dataCriacao').notNullable()
                .defaultTo(knex.fn.now())
            
        }).then(() => {
            return knex('usuarios').insert([
                {
                    nome: "Israel F. Souza",
                    email: "israel@example.com",
                    senha: "123456",
                },

                {
                    nome: "Capivara Brisa",
                    email: "capivara@example.com",
                    senha: "123456",
                },

                {
                    nome: "Emily Q.",
                    email: "emily@example.com",
                    senha: "123456",
                }
            ])
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
};
