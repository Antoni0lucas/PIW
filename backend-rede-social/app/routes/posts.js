let controller = require("../controllers/posts.js");
let auth = require("../controllers/auth.js");

module.exports = function(app){
    app.use("/api/posts", auth.verificar);
    app.post("/api/posts", controller.inserirPosts);
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/posts/:id", controller.retornarPostById);
    app.delete("/api/posts/:id", controller.deletePost);
    app.put("/api/posts/:id", controller.updatePost);
    app.get("/api/posts/:id/user", controller.userPost);

}