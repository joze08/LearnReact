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
      {nomeStack: 'React'},
      {nomeStack: 'JavaScript'},
      {nomeStack: 'EcmaScript'},
      {nomeStack: 'React-Native'},
      {nomeStack: 'TypeScript'},
      {nomeStack: 'C++'},
      {nomeStack: 'C#'},
      {nomeStack: 'COBOL'},
      {nomeStack: 'Java'},
      {nomeStack: 'Ruby'},
      {nomeStack: 'Python'}
    ];
    await Stack.createMany(stacks);
  }
}

module.exports = StackSeeder
