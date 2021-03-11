import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

  public async index ({}: HttpContextContract) {
    const users = await User.all();
    return users;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({request}: HttpContextContract) {
    const data = request.all();
    const user = await User.create({email: data.email, username: data.username, password: data.password});
    
    return user;
  }

  public async showAll ({}: HttpContextContract) {
    const user = await User.all();
    
    return user;
  }

  public async show ({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    return user.delete();
  }
}
