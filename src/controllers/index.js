/**
 * Created by xx on 15/6/4.
 */


"use strict";




var Controllers = {};


Controllers.index = function *() {

    this.body = yield this.render(this.session, "start");
};




module.exports = Controllers;