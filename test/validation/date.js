/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

describe('Date Type Validation', function () {
  var template = {
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
      "baddate":
      {
        "value": "14-14-2020",
        "type": "date",
        "validation": {
          "requiredWhen": 'always'
        }
      },
       "gooddatetime":
      {
        "value": "2010-01-01T05:06:07",
        "type": "datetime",
        "validation": {
          "requiredWhen": 'always'
        }
      },
      "baddatetime":
      {
        "value": "2010-01-01T235:06:07",
        "type": "datetime",
        "validation": {
          "requiredWhen": 'always'
        }
      }
      }
  };
  
  it('should validate good date', function () {
    validator.validateOne(template.data.gooddate, template).valid.should.equal(true);
  });
  it('should not validate bad date', function () {
    validator.validateOne(template.data.baddate, template).valid.should.equal(false);
  });
  
  it('should validate good datetime', function () {
    validator.validateOne(template.data.gooddatetime, template).valid.should.equal(true);
  });
  it('should not validate bad datetime', function () {
    validator.validateOne(template.data.baddatetime, template).valid.should.equal(false);
  });
});