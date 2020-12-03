'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Artigo = use('App/Models/Artigo');

/**
 * Resourceful controller for interacting with artigos
 */
class ArtigoController {
  /**
   * Show a list of all artigos.
   * GET artigos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const artigos = await Artigo.all();
    return artigos;
  }

  /**
   * Render a form to be used for creating a new artigo.
   * GET artigos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new artigo.
   * POST artigos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {texto, stack_id} = request.only(['texto', 'stack_id']);
    const artigo = await Artigo.create({texto, stack_id, user_id:auth.user.id});
    return artigo;
  }

  /**
   * Display a single artigo.
   * GET artigos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const artigo = await Artigo.findOrFail(params.id);
    return artigo;
  }

  /**
   * Update artigo details.
   * PUT or PATCH artigos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const artigo = await Artigo.findOrFail(params.id);
    const { texto } = request.only(['texto']);
    artigo.texto = texto;
    await artigo.save();
    return artigo;
  }

  /**
   * Delete a artigo with id.
   * DELETE artigos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const artigo = await Artigo.findOrFail(params.id);
    await artigo.delete();
    return artigo; 
  }
}

module.exports = ArtigoController
