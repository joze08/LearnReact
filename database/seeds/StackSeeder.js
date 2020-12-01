'use strict'

/*
|--------------------------------------------------------------------------
| StackSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Stack = use('App/Models/Stack')

class StackSeeder {
  async run () {
    const stacks = [
      {nomestack: 'React'},
      {nomestack: 'JavaScript'},
      {nomestack: 'EcmaScript'},
      {nomestack: 'React-Native'},
      {nomestack: 'TypeScript'},
      {nomestack: 'C++'},
      {nomestack: 'C#'},
      {nomestack: 'COBOL'},
      {nomestack: 'Java'},
      {nomestack: 'Ruby'},
      {nomestack: 'Python'}
    ];
    await Stack.createMany(stacks);
  }
}

module.exports = StackSeeder
