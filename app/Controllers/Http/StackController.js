'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Stack = use("App/Models/Stack");

/**
 * Resourceful controller for interacting with stacks
 */
class StackController {
  /**
   * Show a list of all stacks.
   * GET stacks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const stacks = await Stack.all();
    return stacks;
  }


  /**
   * Create/save a new stack.
   * POST stacks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }
  

  /**
   * Display a single stack.
   * GET stacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const stack = await Stack.findOrFail(params.id);
    return stack;
  }

  /**
   * Update stack details.
   * PUT or PATCH stacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a stack with id.
   * DELETE stacks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StackController
