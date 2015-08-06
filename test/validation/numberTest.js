/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

describe('Number Type Validation', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "middle": { "value": "50", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
      "lessthan": { "value": "-50", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
      "morethan": { "value": "150", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
    }
  };

  it('should validate valid number', function () {
    validator.validateOne(template.data.middle, template).valid.should.equal(true);
  });
  it('should not validate less than', function () {
    validator.validateOne(template.data.lessthan, template).valid.should.equal(false);
  });
  it('should not validate more than', function () {
    validator.validateOne(template.data.lessthan, template).valid.should.equal(false);
  });
});