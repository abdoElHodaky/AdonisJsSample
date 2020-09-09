'use strict'

const Lucid = use('Lucid')

class Activity extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get actions(type,id){
   var actions=Activity.query().where({
     "uid":id
    }).fetch().actions;
    return actions.filter(act=>act.type==type)
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
}

module.exports = Activity
