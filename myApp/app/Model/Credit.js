'use strict'

const Lucid = use('Lucid')

class Credit extends Lucid {

  static get connection () {
    return 'mysql'
  }
  client(){
  	return this.belongTo("App/Model/User","uid","uid");
  }
  wallet(){
    return this.belongsTo("App/Model/Wallet","wallid","wallid")
  }
  credits(){
     return this.hasMany("App/Model/Credit","credid","parent_id")
   }
}

module.exports = Credit
