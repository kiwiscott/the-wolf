var model = require("../model");
var validator = require("../validation/validator");
var formdata = require("../formdata");
var path = require("path");

module.exports = {
    getFormById: getFormById,
    processForm: processForm
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

function processForm(req, res, next) {
    //Validate Form
    var form = req.body;
    validator.validate(form.template)
        .then(function (validationResult) {
            if(!validationResult.valid){
                form.errors = validationResult.errors;
                return res.status(501).send(form); 
            }            
            ///This is just a hacketity hack until I can do this for real
            formdata.findById('done')
                .then(function (data) {
                    res.set('Content-Type', 'application/hal+json').send(data);
                }, function (err) {
                    res.status(401).send(model.error(401, 'An error has occured'));
                });
                
        }, function (err) {
            res.status(401).send(model.error(401, 'An error has occured'));
        });
}