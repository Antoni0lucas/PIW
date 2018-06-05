let controller = require("../controllers/user.js");
let auth = require('../controllers/auth.js');

module.exports = function(app){
    app.post("/api/users/login", auth.logar);
    app.post("/api/users", controller.inserirUser);
    app.use("/api/users", auth.verificar);
    app.delete("/api/users/:id", controller.deleteUser);
    app.put("/api/users/:id", controller.updateUser);
    app.get("/api/users/:id/posts", controller.postsUser);
    app.get("/api/users", controller.listarUsers);
    app.get("/api/users/:id", controller.retornarUserById);
}