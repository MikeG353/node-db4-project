const { table } = require("console");

exports.up = function(knex) {
  return knex.schema
    .createTable('Recipes', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
        tbl.string('description', 500)
    })

    .createTable('Ingredients', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
    })

    .createTable('Measurements', tbl => {
        tbl.increments()
        tbl.string('unit', 32)
            .notNullable()
        tbl.float('quantity', 32)
            .notNullable()
            .unsigned()
    })

    .createTable('Steps', tbl => {
        tbl.increments()
        tbl.integer('step_number', 128)
            .notNullable()
            .unsigned()
        tbl.string('instructions', 500)
            .notNullable()
        tbl.integer('recipe_id', 128)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Recipes')
    })

    .createTable('recipe-ingredients', tbl => {
        tbl.increments()
        tbl.integer('recipe_id', 128)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('Recipes')
        tbl.integer('ingredient_id', 128)
            .unsigned()
            .references('id')
            .inTable('Ingredients')
        tbl.integer('step_id', 128)
            .unsigned()
            .references('id')
            .inTable('Steps')
        tbl.integer('measurement_id', 128)
            .unsigned()
            .references('id')
            .inTable('Measurements')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('Steps')
    .dropTableIfExists('Measurements')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')
};
