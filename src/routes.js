"use strict";
var router = require("koa-router")();


var controller = require("./controllers/index");




module.exports = function (app) {
    // register functions


    function setUpPageRoute(url) {
        var fncs = Array.prototype.slice.call(arguments, 1);
        app.get.apply(app, [url].concat(funcs));
        app.get.apply(app, ["/api" + url].concat(funcs))
    };


    router.get("/", controller.index);




    app.use(router.routes())
        .use(router.allowedMethods());
};
