'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Artigo extends Model {
    user(){
        return this.belongsTo('App/Models/User');
    }
    stack(){
        return this.belongsTo('App/Models/Stack');
    }
}

module.exports = Artigo
