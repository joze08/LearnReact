'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// STACK

Route.get('/stacks', 'StackController.index');
Route.get('/stackShow', 'StackController.show');

//USER

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

// ARTIGO
Route.group(()=>{  
  Route.resource('artigos', 'ArtigoController')
  .apiOnly()
  .except(['index', 'show'])
}).middleware(['auth']);


/*
Route.get('/artigos', 'ArtigoController.index');

Route.post('/store', 'ArtigoController.store');

Route.get('/show', 'ArtigoController.show');

Route.put('/update', 'ArtigoController.update');

Route.delete('/delete', 'ArtigoController.destroy');
*/
