/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

/* Web Routes */
Route.on('/').render('home').middleware('auth')
Route.on('/login').render('login')
Route.on('/register').render('register')

/* Auth Routes */
Route.post('/auth', 'AuthController.login')
Route.post('/register', 'AuthController.store')

/* User Routes */
Route.get('/users', 'UsersController.index')
Route.get('/user/:id', 'UsersController.show')
Route.get('/delete-user/:id', 'UsersController.destroy')

/* Tweet Routes */
Route.get('/tweets', 'TweetsController.index')
Route.post('/tweet', 'TweetsController.store')
Route.delete('/tweet:id', 'TweetsController.destroy')
