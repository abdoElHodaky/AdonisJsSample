'use strict'

const Lucid = use('Lucid'),
RandomCode=use("randomcode")

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
   this.addHock("beforeFetch",order=>{
       credits_values=yield use("App/Model/OrderedProduct").credits_value
       total=credits_values.reduce((t,v)=>t+=v)
       yield order.user().credits().create({
        value:order.commission*total
        code:RandomCode(8)
       })
   })

  }

  products(transfer=false){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id')
       .where({"transfered":transfer}) ;
  }
  
}

module.exports = Order
