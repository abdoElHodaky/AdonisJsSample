'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
   this.addHook("afterCreate",cat=>{
      yield use("App/Model/Activity").create({
       action:"create_category",
       at:cat.created_at,
       callback_url:route("CatController.show",{catid:cat.catid})
      })
   })
  }
  shop(){
  	return this.belongsTo("App/Model/Shop",'sid','sid');
  }
  childern(){
  	return this.hasMany("App/Models/Cat","parent_id","cid")
  }
  products(){
   return this.hasMany("App/Models/Product","cid","cid")
  }
  
}

module.exports = Cat
