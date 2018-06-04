let controller = require("../controllers/user.js");
let auth = require('../controllers/auth.js');

module.exports = function(app){
    app.post("/api/users/login", auth.logar);
    app.get("/api/users", controller.listarUsers);
    app.get("/api/users/:id", controller.listarUserById);
    app.use("/api/users/", auth.verificar);
    app.post("/api/users", controller.inserirUser);
    app.delete("/api/users/:id", controller.deletarUser);
    app.put("/api/users/:id", controller.updateUser);
}