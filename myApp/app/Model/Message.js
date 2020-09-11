'use strict'

const Lucid = use('Lucid')

class Message extends Lucid {

  static get connection () {
    return 'mysql'
  }

  users(){
    return this.hasMany("App/Model/User","uid","uid")
  }
  attachments(){
    return this.manyThrough("App/Model/MessageAttachment","attachments","aid","aid")
   }
}
module.exports = Message
