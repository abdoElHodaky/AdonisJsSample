'use strict'
const Product=use("App/Model/Product");
class ProductCommentController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.comments().load("children"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post(),
    comment= yield Comment.create(inputs.comment)
    if("attachment" in inputs)
      comment.attachments().attach(
       [(yield Attachment.create(inputs.attachment)).aid])
     var comments=yield Product.find(request.params().pid).
      comments()
     .attach([
        comment.commid
      ])
    
    response.json(yield comments.load("comments"))
  }

  * show(request, response) {
    //
    }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=Product.find(request.params().pid)
      response.json(product.comments()
     .where({"commid":request.params().commid}).
     update(request.post()))
  }

  * destroy(request, response) {
    //
  }
  

}

module.exports = ProductCommentController
