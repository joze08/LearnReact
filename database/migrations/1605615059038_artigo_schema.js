'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtigoSchema extends Schema {
  up () {
    this.create('artigos', (table) => {
      table.increments()
      table.text('texto', 300).notNullable()
      table.integer('stack_id').unsigned()
      .references('id').inTable('stacks')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable()
      table.integer('user_id').unsigned()
      .references('id').inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('artigos')
  }
}

module.exports = ArtigoSchema
