let posts = [{ _id: 1, text: "Olá", likes: 2, idUser: "2030" },
{ _id: 2, text: "Mundo", likes: 2, idUser: "3020" }];

module.exports.listarPosts = function (req, res) {
    res.json(posts);
};
module.exports.obterPost = function (req, res) {
    let id = req.params.id;
    let post = posts.find(post => (post._id == id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post não encontrado');
    }
}
module.exports.inserirPost = function (req, res) {
    posts.push(req.body);
    res.status(200).send(req.body);
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