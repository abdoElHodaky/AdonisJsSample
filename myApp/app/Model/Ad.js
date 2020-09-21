'use strict'

const Lucid = use('Lucid')

class Ad extends Lucid {

  static get connection () {
    return 'mysql'
  }

  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  attachments(){
     return this.belongsToMany("App/Model/Attachment","adid","aid","aid","adid").
     pivotModel("App/Model/AdAttachment")
    //return this.manyThrough("App/Model/AdAttachment","attachments","adid","aid")
   }
   visits(){
     return this.belongsToMany("App/Model/Visit","adid","visid","visid","adid").
     pivotModel("App/Model/AdVisit")
   }
}
module.exports = Ad
