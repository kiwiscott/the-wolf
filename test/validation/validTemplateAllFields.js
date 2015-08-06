/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

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
                "options": [
                    { "value": "Cisco" },
                    { "value": "Other" }
                ]
            }
        }
    };

   
     it('should validate all fields', function () {
        //We do this so we can change the field values
        var template = JSON.parse(JSON.stringify(baseTemplate));
        
        var result = validator.validate(template);
        
        result.should.equal(true);
        should(template).not.have.property('errors');
    });
     it('should be invalid when one field is not valid', function () {
        var template = JSON.parse(JSON.stringify(baseTemplate));
        template.data.email.value = "bademail";
        
        var result = validator.validate(template);
        
        result.should.equal(false);
        should(template).have.property('errors');
        template.errors.length.should.equal(1);
    });
    it('should be invalid when two fields is not valid', function () {
        var template = JSON.parse(JSON.stringify(baseTemplate));
        template.data.email.value = "bademail";
        template.data.oneOf.value = "crazy";
        
        var result = validator.validate(template);
        
        result.should.equal(false);
        should(template).have.property('errors');
        template.errors.length.should.equal(2);
    });
});