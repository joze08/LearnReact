'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StackSchema extends Schema {
  up () {
    this.create('stacks', (table) => {
      table.increments()
      table.string('nomestack').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('stacks')
  }
}

module.exports = StackSchema
