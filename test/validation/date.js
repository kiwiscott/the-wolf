/// <reference path="../../typings/tsd.d.ts"/>
var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

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

  it('should validate good date', function (done) {
    t.validateField('gooddate', template, true, done);
  });
  
  it('should not validate bad date', function (done) {
    var errors = ['The field must be mm-dd-yyyy'];
    t.validateField('baddate', template, false, done, errors);
  });

  it('should validate good datetime', function (done) {
    t.validateField('gooddatetime', template, true, done);
  });

  it('should not validate bad datetime', function (done) {
    t.validateField('baddatetime', template, false, done);
  });
});