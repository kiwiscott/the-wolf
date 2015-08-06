/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

describe('OneOf Type Testing', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "one":
      {
        "value": "Cisco",
        "type": "oneOf",       
        "options": [
          { "value": "Cisco" },
          { "value": "Other" }
        ]
      },
      "two": {
        "value": "Apple",
        "type": "oneOf",
        "options": [
          { "value": "Cisco" },
          { "value": "Other" }
        ]
      },
      "three": {
        "value": null,
        "type": "oneOf",
        "options": [
          { "value": "Cisco" },
          { "value": "Other" }
        ],
        "validation": {
          "requiredWhen" : "always"
        }
      }
    }
  };

  it('should be valid if the value is in the list', function () {
    validator.validateOne(template.data.one,template).valid.should.equal(true);
  });

  it('should not be valid if the value is not in the list', function () {
    validator.validateOne(template.data.two,template).valid.should.equal(false);
  });
    
  it('should not be valid if the value is null', function () {
    validator.validateOne(template.data.three,template).valid.should.equal(false);
  });
});