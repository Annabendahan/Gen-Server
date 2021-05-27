var express = require('express');
var maillotsCtrl = require('./routes/maillotsCtrl');



exports.router = (function () {
    var apiRouter = express.Router();

    //maillots routes

    apiRouter.route('/maillots/new/').post(maillotsCtrl.createMaillot);
    apiRouter.route('/maillots/').get(maillotsCtrl.listMaillots);

    return apiRouter;
})();