'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserStack extends Model {
    user(){
        return this.belongsTo('App/Models/User');
    }
    stack(){
        return this.belongsTo('App/Models/Stack');
    }
}

module.exports = UserStack
