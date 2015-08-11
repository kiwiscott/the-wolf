/// <reference path="../../typings/tsd.d.ts"/>

var model = require("../model");
var validatorFactory = require("./validatorFactory");
var requiredWhen = require("./requiredWhen");
var Promise = require("promise");
var Q = require("q");
var log4js = require('log4js');
var applog = log4js.getLogger();

module.exports = {
    validate: validate,
    validateField: validateField,
};
function validateField(fieldName, template) {
    return new Promise(function (resolve, reject) {
        var field = template.data[fieldName];
        
        Q.resolve(requiredWhen.isRequired(field, template))
            .then(function(required){ 
                return validatorFactory.validate(required, field,template);
            }).then(function (data) {
                    var vr =  model.validationResult(data.length == 0, data);                    
                    var r = (vr.valid === true) ? null : model.fieldError(fieldName, vr.errors);         
                    return resolve(r);
            }).fail(function (error) {
                return reject(error);
            }).done();
    });
}

function validate(template) {
    return new Promise(function (resolve, reject) {
        var promises = [];
        for (var fieldName in template.data) {
            promises.push(validateField(fieldName, template));
        }
        Q.all(promises)
        .then(function(values){
            var invalids =  values.filter(function(x){ return x != null;});
            var vr = model.validationResult(invalids.length == 0, invalids); 
            return resolve(vr);
        }).fail(function(e){
            applog.debug('eeeor - '+ JSON.stringify(e));
             return resolve(true); })
        .done();
    });
}