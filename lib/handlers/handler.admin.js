var formdata = require("../formdata");
var model = require("../model")

module.exports = {
    getFormById: getFormById,
    saveForm: saveForm
};

function getFormById(req, res, next) {
    var formId = req.params.form_id;
    formdata.findById(formId)
        .then(function (data) {
            res.set('Content-Type', 'application/hal+json').send(data);
        }, function (err) {
            res.status(401).send(model.error(401, 'An error has occured'));
        });
}

function saveForm(req, res, next) {
    var formId = req.params.form_id;
    var body = JSON.stringify(req.body, null, 2);
    formdata.save(formId, body)
        .then(function (result) {
            res.sendStatus(200);
        }, function (err) {
            res.status(401).send(model.error(401, 'An error has occured'));
        });
}