let User = require('../models/user.js');
let Post = require('../models/posts.js');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports.inserirUser = function (req, res) {
    let user = new User({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });
    let promise = User.create(user)
    promise.then(
        function (users) {
            res.status(201).json({
                id: user._id,
                nome: user.nome,
                email: user.email
            });
        },
    ).catch(
        function (error) {
            res.status(500).send(error);
        }
    )
}

module.exports.listarUsers = function (req, res) {
    let promise = User.find().exec();
    promise.then(
        function (user) {
            res.json(user);
        }
    ).catch(
        function () {
            res.status(404).send(erro);
        }
    )
};

module.exports.retornarUserById = function (req, res) {
    let id = req.params.id;
    let promise = User.findById(id).exec();
    promise.then(
        function (user) {
            res.status(201).json({
                id: user._id,
                nome: user.nome,
                email: user.email
            });
        }
    ).catch(
        function (erro) {
            res.status(500).send(erro);
        }
    )
};

module.exports.deleteUser = function (req, res) {
    let payload = jwt.decode(req.query.token);

    let promise = User.remove({ "_id": payload.id }).exec();
    promise.then(
        function (user) {
            res.status(201).send("Removido");
        }
    ).catch(
        function (erro) {
            res.status(500).send(erro);
        }
    )
};

module.exports.updateUser = function (req, res) {
    let payload = jwt.decode(req.query.token);
    let user = new User ({
        _id: payload.id, 
        nome: req.body.nome,
        email: req.body.email, 
        senha: req.body.senha
    })

    let promise = User.findByIdAndUpdate(payload.id, req.body).exec();
    promise.then(
        function(user){
            res.status(201).json({
                id: user.id, 
                nome: user.nome,
                email: user.email
            });
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
};

module.exports.postsUser = function (req, res) {
    let id = req.params.id;
    let promise = Post.find({"userId": id}).exec();
    promise.then(
        function(posts){
            res.status(201).json(posts);
        }
    ).catch(
        function(erro){
            res.status(500).send(erro);
        }
    )
}