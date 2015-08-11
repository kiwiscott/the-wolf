/// <reference path="../../typings/tsd.d.ts"/>
var moment = require("moment");
var Promise = require("promise");

exports.validate = function (required, field) {
    return new Promise(function (res, rej) {
        if (required && field.value == null) {
            return res(['Field is required']);
        }
        var valid = moment(field.value, "MM-DD-YYYY", true).isValid();

        if (!valid) {
            return res(['The field must be mm-dd-yyyy']);
        }
        res([]);
    });
}