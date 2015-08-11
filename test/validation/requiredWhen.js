/// <reference path="../../typings/tsd.d.ts"/>

var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

describe('Required Field Validation Testing', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data":
    {
      "greeting": {
        "type": "string",
        "value": 'Cool',
        "validation": {
          "requiredWhen": ""
        }
      },
      "name": {
        "type": "string",
        "value": null,
        "validation": {
          "requiredWhen": "x-greeting === 'Cool'"
        }
      },
      "crazy": {
        "type": "string",
        "value": null,
        "validation": {
                  "requiredWhen": "x-greeting==null||x-name==null"
        }
      }
    }
  };

  it('should be valid when not required', function (done) {
    t.validateField('greeting', template,true,done);
  });

  it('should be invalid if required by assoication', function (done) {
    t.validateField('name', template,false,done);
  });

  it('should be able to validate a complex requiredWhen', function (done) {
    t.validateField('crazy', template,false,done);
  });
});