/// <reference path="../../typings/tsd.d.ts"/>

var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

describe('Number Type Validation', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "middle": { "value": "50", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
      "lessthan": { "value": "-50", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
      "morethan": { "value": "150", "type": "number", "validation": { "requiredWhen": 'always', "minimumValue": 0, "maximumValue": 100 } },
    }
  };

  it('should validate valid number', function (done) {
    t.validateField('middle', template, true, done);
  });
  it('should not validate less than', function (done) {
    t.validateField('lessthan', template, false, done);
  });
  it('should not validate more than', function (done) {
    t.validateField('morethan', template, false, done);
  });
});