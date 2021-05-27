var models = require('../models');
var asyncLib = require('async');

module.exports = {
    createMaillot: function (req, res) {

        var author = req.body.author;
        var style = req.body.style;
        var col = req.body.col;
        var main = req.body.main;
        var leftSleeve = req.body.leftSleeve;
        var rightSleeve = req.body.rightSleeve;
        var details = req.body.details
        var bottom = req.body.bottom


        asyncLib.waterfall([
            function (done) {
                models.Maillot.create({
                    author: author,
                    style: style,
                    col: col,
                    main: main,
                    leftSleeve: leftSleeve,
                    rightSleeve: rightSleeve,
                    details: details,
                    bottom: bottom
                })
                    .then(function (newMaillot) {
                        done(newMaillot)
                    });
            }
        ], function (newMaillot) {
            if (newMaillot) {
                return res.status(201).json(newMaillot);
            } else {
                return res.status(500).json({ 'error': 'cannot post maillot' });
            }
        });

    },
    listMaillots: function (req, res) {
        var fields = req.query.fields;
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);
        var order = req.query.order;

        models.Maillot.findAll({
            order: [(order != null) ? order.split(':') : ['author', 'ASC']],
            attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
            limit: (!isNaN(limit)) ? limit : null,
            offset: (!isNaN(offset)) ? offset : null
        }).then(function (maillots) {
            if (maillots) {
                res.status(200).json(maillots);
            } else {
                res.status(404).json({ "error": "no msg found" })
            }
        }).catch(function (err) {
            console.log(err);
            res.status(500).json({ "error": "invaliddd" })
        });
    }
}