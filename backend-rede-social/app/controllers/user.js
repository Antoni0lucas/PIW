let User = require('../models/user.js');
let bcrypt = require('bcrypt');

module.exports.inserirUser = function(req, res){
    let user = new User({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });
    let promise = User.create(user)
    promise.then(
        function(users){
            res.status(201).json(users);
        },
        function(erro){
            res.status(500).json(erro);
        }
    );
}

module.exports.listarUsers = function(req, res){
    
    let promise = User.find();
    promise.then(
        function(users){
            res.json(users)
        },
        function(users){
            res.status(500).end();
        }
    );
}

module.exports.listarUserById = function(req, res){
    let id = req.params.id;
    let promise = User.findById(id);
    promise.then(
        function(users){
            res.json(users)
        },
        function(users){
            res.status(500).end();
        }
    );
}

module.exports.deletarUser = function (req, res) {
    let id = req.params.id;
    let user = users.find(user => (user._id == id));
    if (user) {
        let i = users.indexOf(user);
        if (i != -1) {
            users.splice(i, 1);
        }
        res.json(user);
    }
    else {
        res.status(404).send('Usuario não encontrado');
    }
};

module.exports.updateUser = function (req, res) {
    let id = req.params.id;

}

module.exports.retornaPosts = function (req, res) {
    if (req.query.min_id) {
        let list = posts.filter((el) => (el._id >= req.query.min_id));
        res.json(list);
    } else {
        res.json(posts);
    }
}