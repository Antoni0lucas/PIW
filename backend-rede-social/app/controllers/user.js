let users = [{ _id: 1, nome: "É o preno", email: "nogueirao@email.com", senha: "luise" },
{ _id: 2, nome: "Dhesquinha", email: "dhesquinha@email.com", senha: "barro" }];

module.exports.listarUsers = function (req, res) {
    res.json(users);
};

module.exports.obterUser = function (req, res) {
    let id = req.params.id;
    let user = users.find(user => (user._id == id));
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send('Usuario não encontrado');
    }
};

module.exports.inserirUser = function (req, res) {
    users.push(req.body);
    res.status(200).send(req.body);
    console.log(req.body);
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
    let user = users.find(user => (user._id == id));
    if (user) {
        users.put(user._id, user)
    } else {
        res.status(404).send('Usuario não encontrado');
    }
}