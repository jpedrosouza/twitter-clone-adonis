import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tweets extends BaseSchema {
  protected tableName = 'tweets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('content', 240).notNullable()
      table.integer('likes').defaultTo(0)
      table.integer('replies').defaultTo(0)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
