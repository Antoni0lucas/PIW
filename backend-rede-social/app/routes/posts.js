let controller = require("../controllers/posts.js");

module.exports = function(app){
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/posts/:id", controller.retornarPostById);
    app.post("/api/posts", controller.inserirPosts);
    app.delete("/api/posts/:id", controller.deletePost);
    app.put("/api/posts/:id", controller.updatePost);
    app.get("/api/posts/:id/user", controller.userPost);

}