let controller = require("../controllers/user.js");

module.exports = function(app){
    app.get("/api/users", controller.listarUsers);
    app.get("/api/users/:id", controller.obterUser);
    app.post("/api/users", controller.inserirUser);
    app.delete("/api/users/:id", controller.deletarUser);
    app.put("/api/users/:id", controller.updateUser);
}