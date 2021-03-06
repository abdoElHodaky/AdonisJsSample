'use strict'

const Schema = use('Schema')

class PricesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('prices', (table) => {
      table.increments("pricid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.float("amount").default(0)
      table.integer("parent_id")
      table.foreign("parent_id").references("pricid").on("pricid")
      table.softDeletes()
    })
  }

  down () {
    this.drop('prices')
  }

}

module.exports = PricesTableSchema
