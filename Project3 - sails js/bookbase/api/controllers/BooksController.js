/**
 * BooksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:function(req,res){
    Books.find({}).exec(function(err, books){
        if(err){
            res.send(500, {error: "Db erroe"})
        }
        res.view('list', {books:books})
    });
  }

};

