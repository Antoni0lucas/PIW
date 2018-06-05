let Post = require('../models/posts.js');
let jwt = require('jsonwebtoken');

module.exports.listarPosts = function (req, res) {
    let promise = Post.find().exec();
    promise.then(
        function (posts) {
            res.json(posts)
        },
        function (erro) {
            res.status(500).end();
        }
    );
}

module.exports.retornarPostById = function (req, res) {
    let id = req.params.id;
    let promise = Post.findById(id);
    promise.then(
        function (post) {
            res.json(post);
        },
        function (erro) {
            res.status(500).end();
        }
    )
}

module.exports.inserirPosts = function (req, res) {
    let payload = jwt.decode(req.query.token);
    let post = new Post({
        texto: req.body.texto,
        likes: req.body.likes,
        userId: payload.id
    });

    let promise = Post.create(post);
    promise.then(
        function(post){
            res.status(201).json(post);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    );
}

module.exports.deletePost = function (req, res) {
    let payload = jwt.decode(req.query.token);
    let id = req.params.id;
    let promise = Post.remove({ '_id': id });
    promise.then(
        function (post) {
            if (req.body.usuario == payload.id) {
                res.status(201).json(post);
            } else {
                res.status(500).send(erro);
            }
        }
    ).catch(
        function (erro) {
            res.status(500).send(erro);
        }
    )
};

module.exports.updatePost = function (req, res) {
    let id = req.params.id;

    let post = new Post({
        _id: id,
        texto: req.body.texto,
        likes: req.body.likes,
        userId: req.body.userId

    });

    let payload = jwt.decode(req.query.token);

    let promise = Post.findByIdAndUpdate(id, post);
    promise.then(
        function (post) {
            if (req.body.userId == payload.id) {
                res.status(201).json(post);
            } else {
                res.status(500).send("Usuário inválido");
            }
        }
    ).catch(
        function (erro) {
            res.status(500).send(erro);
        }
    )

}

module.exports.userPost = function (req, res) {
    let id = req.params.id;
    let promise = Post.findById(id).populate('userId', '-senha').exec();
    promise.then(
        function (post) {
            res.json(post.userId);
        }
    ).catch(
        function (erro) {
            res.status(500).send(erro);
        }
    )
}