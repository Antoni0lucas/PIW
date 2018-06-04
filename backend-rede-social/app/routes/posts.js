let controller = require("../controllers/posts.js");

module.exports = function(app){
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/posts/:id", controller.listaPostById);
    app.post("/api/posts", controller.inserirPosts);
}