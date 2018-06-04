let bcrypt = require('bcrypt');
let User = require('../models/user.js');
let jwt = require('jsonwebtoken');

module.exports.logar = function (req, res) {
    function logar(user) {
        if (!bcrypt.compareSync(req.body.senha, user.senha)) {
            falhar();
        } else {
            let token = jwt.sign({ id: user._id }, 'secret');
            res.status(200).json({
                message: 'logado',
                token: token,
                id: user._id
            });
        }
    }
    function falhar() {
        res.status(401).send('invalid login');
    }
    User.findOne({ email: req.body.email }).exec().then(logar, falhar);
}

module.exports.verificar = function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (erro, decoded){
        if(erro){
            return res.status(401).json({
                title: 'nao autenticado',
                error: erro
            })

        }
        next();
    })
}