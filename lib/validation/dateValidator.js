/// <reference path="../../typings/moment/moment-node.d.ts"/>

var moment = require("moment");

exports.validate = function (required, field, errors) {
    if (required && field.value == null) {
        errors.push('Field is required');
        return;

    } 
    var valid = moment(field.value, "MM-DD-YYYY",true).isValid();
    
    if (!valid) {
        errors.push('The field must be mm-dd-yyyy');
    }
}