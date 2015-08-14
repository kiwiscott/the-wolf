/// <reference path="../../typings/tsd.d.ts"/>

var should = require('should');
var validator = require('../../lib/validation/validator');

describe('Large Form Validation', function () {
    var baseTemplate = {
        "id": "Ce3wr42qwd",
        "data": {
            "gooddate":
            {
                "value": "08-10-2020",
                "type": "date",
                "validation": {
                    "requiredWhen": 'always'
                }
            },
            "middle": {
                "value": "50",
                "type": "number",
                "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 }
            },
            "greeting": {
                "type": "string",
                "value": 'Cool',
                "validation": {
                    "requiredWhen": ""
                }
            },
            "email":
            {
                "value": "scott@scott.com",
                "type": "string",
                "validation": {
                    "pattern": "^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$",
                    "sample": "user@jpmchase.com",
                    "requiredWhen": ''
                }
            }, "oneOf": {
                "value": "Cisco",
                "type": "oneOf",
                "validation": {
                    "options": [
                        { "value": "Cisco" },
                        { "value": "Other" }
                    ]
                }
            },
            "awesome":
            {
                "value": "21",
                "type": "lookup",
                "validation": {
                    "requiredWhen": 'always',
                    "lookupType": 'azure'
                }
            }
        }
    };



    it('should validate all fields', function (done) {
        //We do this so we can change the field values
        var template = JSON.parse(JSON.stringify(baseTemplate));

        validator.validate(template)
            .then(function (validationResult) {
                validationResult.valid.should.equal(true);
                validationResult.errors.length.should.equal(0);
            }).done(function (s) { done(); });
    });
    it('should be invalid when one field is not valid', function (done) {
        var template = JSON.parse(JSON.stringify(baseTemplate));
        template.data.email.value = "bademail";

        validator.validate(template)
            .then(function (validationResult) {
                validationResult.valid.should.equal(false);
                validationResult.errors.length.should.equal(1);
            }).done(function (s) { done(); });
    });
    it('should be invalid when two fields is not valid', function (done) {
        var template = JSON.parse(JSON.stringify(baseTemplate));
        template.data.email.value = "bademail";
        template.data.oneOf.value = "crazy";

        validator.validate(template)
            .then(function (validationResult) {
                validationResult.valid.should.equal(false);
                validationResult.errors.length.should.equal(2);
            }).done(function (s) { done(); });
    });
});