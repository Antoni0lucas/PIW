let controller = require("../controllers/posts.js");

module.exports = function(app){
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/posts/:id", controller.obterPost);
    app.post("/api/posts", controller.inserirPost);
    app.delete("/api/posts/:id", controller.deletePost);
}