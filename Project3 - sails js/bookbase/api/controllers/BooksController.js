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
            res.send(500, {error: "Db error"})
        }
        res.view('list', {books:books})
    });
  },

  add: function(req,res){
      res.view('add')
  },

  create:function(req,res){
    var title = req.body.title
    var author = req.body.author

    Books.create({title:title, author:author}).exec(function(err){
        if(err){
            res.send(500, {error: "Db error"})
        }
        res.redirect('/books/list');
    })
  }

};

