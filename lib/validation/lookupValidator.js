/// <reference path="../../typings/tsd.d.ts"/>
    
var lookup = require('../lookup/lookupFactory');
var Promise = require("promise");
var log4js = require('log4js');
var applog = log4js.getLogger();
var lookup = require('../lookup/lookupFactory');

exports.validate = function (required, field, template) {
    return new Promise(function (res, rej) {
        var errors = [];
        if (required && field.value == null) {
            errors.push('Field is required')
            return res(errors);
        }
        var lookupType = field.validation.lookupType;
        var category = (field.validation.lookupParent == null)
            ? null :
            template.data[field.validation.lookupParent.replace("x-", "")].value;

        applog.debug('lookup.validate(lookupType, field.value, category)' + lookupType + '\t' + field.value + '\t' + category + '\t' );


        lookup.validate(lookupType, field.value, category)
            .then(function (data) {
                
                applog.debug('Lookup Returned');
                applog.debug(data);
                if (data.length == 1) {
                    applog.debug(data);
                    res([]);
                }
                else {
                    res(['Field value is not valid']);
                }
            }, function (err) {
                return rej(err);
            });
    });
};