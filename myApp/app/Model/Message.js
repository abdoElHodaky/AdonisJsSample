'use strict'

const Lucid = use('Lucid')

class Message extends Lucid {

  static get connection () {
    return 'mysql'
  }

  users(){
    return this.hasMany("App/Model/User","uid","uid").where({"type":"conversation"})
  }
  attachments(){
    //return this.manyThrough("App/Model/MessageAttachment","attachments","messegid","aid")
    return this.belongsMany("App/Model/Attachment","mesgid","aid","aid","mesgid").pivotModel("App/Model/MessageAttachment")
   }
  messages(){
   return this.hasMany("App/Model/Message","mesgid","parent_id").where({"type":"conversation"})
  }
}
module.exports = Message
