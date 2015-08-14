/// <reference path="../../typings/tsd.d.ts"/>

var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

describe('OneOf Type Testing', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "one":
      {
        "value": "Cisco",
        "type": "oneOf",
        "validation": {
          "options": [
            { "value": "Cisco" },
            { "value": "Other" }
          ]
        }
      },
      "two": {
        "value": "Apple",
        "type": "oneOf",
        "validation": {
          "options": [
            { "value": "Cisco" },
            { "value": "Other" }
          ]
        }
      },
      "three": {
        "value": null,
        "type": "oneOf",
        "validation": {
          "requiredWhen": "always",
          "options": [
            { "value": "Cisco" },
            { "value": "Other" }
          ]
        }
      }
    }
  };

  it('should be valid if the value is in the list', function (done) {
    t.validateField('one', template, true, done);
  });

  it('should not be valid if the value is not in the list', function (done) {
    t.validateField('two', template, false, done);
  });

  it('should not be valid if the value is null', function (done) {
    t.validateField('three', template, false, done);
  });
});
