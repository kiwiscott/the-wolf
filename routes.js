/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/express/express.d.ts"/>

var router = require('express').Router();
var data = require('./lib/data');
var model = require('./lib/model');
var validator = require('./lib/validator');

var path = require('path');


router.route('/admin/:form_id')
    .get(getFormById)
    .post(saveForm);

router.route('/form/:form_id')
    .get(getFormById)
    .post(processForm);

module.exports = router;
///////////////////////////////////////////////////////////
function getFormById(req, res, next) {
    var formId = req.params.form_id;
    data.findById(formId, function (err, data) {
        if (err) {
            res.status(404).send(model.error(404, 'Not found'));
        }
        else {
            res.set('Content-Type', 'application/hal+json').send(data).end();
        }
    });
}

function saveForm(req, res, next) {
    var formId = req.params.form_id;
    var body = JSON.stringify(req.body, null, 2);
    data.save(formId, body, function (err, ok) {
        if (err) {
            res.status(401).send(model.error(401, 'An error has occured'));
        }
        else {
            res.sendStatus(200);
        }
    });
}
function processForm(req, res, next) {
    //Validate Form
    var form = req.body;
    var valid = validator.validate(form.template);

    if (!valid) {
        res.status(401).send(form);
        return;
    }

    res.sendFile(path.join(__dirname + "/done.json"), {
        'Content-Type': 'application/hal+json'
    });
}