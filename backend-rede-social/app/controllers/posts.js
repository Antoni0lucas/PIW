let Post = require('../models/posts.js');
let bcrypt = require('bcrypt');

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(
        function(posts){
            res.json(posts)
        },
        function(erro){
            res.status(500).end();
        }
    );
}

module.exports.listaPostById = function (req, res) {
    let id = req.params.id;
    let post = posts.find(post => (post._id == id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post não encontrado');
    }
}

module.exports.inserirPosts = function(req, res){
    let promise = Post.create(req.body)
    promise.then(
        function(post){
            res.status(201).json(post);
        },
        function(erro){
            res.status(500).json(erro);
        }
    );
}

module.exports.deletePost = function (req, res) {
    let id = req.params.id;
    let post = posts.find(post => (post._id == id));
    if (post) {
        let i = posts.indexOf(post);
        if (i != -1) {
            posts.splice(i, 1);
        }
        res.json(post);
    }
    else {
        res.status(404).send('Usuario não encontrado');
    }
}

module.exports.updatePost = function(req, res){
    let id = req.params.id;
    let post = posts.findByIdAndUpdate(id, {
        'texto': req.body.texto
    });
    if(post){

    }
    else{
        res.status(404).send('Usuario não encontrado');
    }
};