'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("id").on("users")
      table.string("type").nullable(false)
      table.float("total")
      table.string("status").nullable()

    })
  }

  down () {
    this.drop('orders')
  }

}

module.exports = OrdersTableSchema
