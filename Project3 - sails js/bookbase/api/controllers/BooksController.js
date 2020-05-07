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
    },

    delete: function(req, res){
        Books.destroy({id:req.params.bookId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/books/list');
        });
        return false;
    },

    edit: function(req, res){
        Books.findOne({id:req.params.bookId}).exec(function(err, book){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('edit', {book:book});
        });
    },

    update: function(req, res){
        var title = req.body.title;
        var author = req.body.author;

        Books.update({id: req.params.bookId},{title:title, author:author}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/books/list');
        });

        return false;
    }

};

