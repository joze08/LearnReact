'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Stack extends Model {
    artigo(){
        return this.hasMany('App/Models/Artigo');
    }
    userHasStack() {
        return this.hasOne('App/Models/UserStack');
    }
}

module.exports = Stack
