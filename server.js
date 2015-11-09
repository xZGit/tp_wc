/**
 * Created by xx on 15/11/9.
 */


var  Koa = require('koa');

var app = Koa();
// logger


var config = require("./conf/config");




require("./src/koa")(app, config);

require("./src/middleware")(app, config);
// Routes
require("./src/routes")(app);


// Start app
if (!module.parent) {
app.listen(config.app.port);
console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);


