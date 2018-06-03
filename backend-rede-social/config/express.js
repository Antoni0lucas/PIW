let express = require('express');
let usersRouter = require('../app/routes/user.js');
let postsRouter = require('../app/routes/posts.js')
let bodyParser = require('body-parser');

module.exports = function () {
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    usersRouter(app);
    // postsRouter(app);
    return app;
};

