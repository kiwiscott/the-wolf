/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

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

  it('should be valid when not required', function () {
    validator.validateOne(template.data.greeting, template).valid.should.equal(true);
  });

  it('should be invalid if required by assoication', function () {
    validator.validateOne(template.data.name, template).valid.should.equal(false);
  });

  it('should be able to validate a complex requiredWhen', function () {
    validator.validateOne(template.data.crazy, template).valid.should.equal(false);
  });
});