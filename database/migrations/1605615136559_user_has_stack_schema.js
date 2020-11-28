'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserHasStackSchema extends Schema {
  up () {
    this.create('user_stacks', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      .references('id').inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable()
      table.integer('stack_id').unsigned()
      .references('id').inTable('stacks')
      .onUpdate('cascade')
      .onDelete('cascade')
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_stacks')
  }
}

module.exports = UserHasStackSchema
