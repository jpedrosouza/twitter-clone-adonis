import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tweet from 'App/Models/Tweet'

export default class TweetsController {

  /*
    GET all Tweets from Database.
  */
  public async index({ }: HttpContextContract) {
    const tweet = await Tweet.all()

    return tweet
  }

  public async create({ }: HttpContextContract) {
  }

  /* 
    CREATE a Tweet in Database. 
  */
  public async store({ request, auth }: HttpContextContract) {
    const data = request.all()
    const tweet =  await Tweet.create({user_id: auth.user?.id, ...data})

    return tweet
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  /*
    Only allows a tweet to be DELETE if the owner Id is 
    the same as the authenticated.
  */
  public async destroy({ params, auth, response }: HttpContextContract) {
    const tweet = await Tweet.findOrFail(params.id)

    if (tweet.user_id != auth.user?.id) {
      return response.status(500)
    }

    return tweet.delete()
  }
}
