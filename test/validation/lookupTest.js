/// <reference path="../../typings/tsd.d.ts"/>
var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

describe('Look Up Validation', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "awesome":
      {
        "value": "21",
        "type": "lookup",
        "validation": {
          "requiredWhen": 'always',
          "lookupType": 'azure'
        }
      },
      "invalid":
      {
        "value": "X21",
        "type": "lookup",
        "validation": {
          "requiredWhen": 'always',
          "lookupType": 'azure'
        }
      },
      "lookupWithCategory":
      {
        "value": "96",
        "type": "lookup",
        "validation": {
          "requiredWhen": 'always',
          "lookupType": 'azure',
          "lookupParent" : "x-category"
        }
      },
      "category": {
        "type": "string",
        "value": "Ireland",
        "validation": {
          "requiredWhen": "always"
        }
      },
      "lookupWithCategoryInvalid":
      {
        "value": "16",
        "type": "lookup",
        "validation": {
          "requiredWhen": 'always',
          "lookupType": 'azure',
          "lookupParent" : "x-category"
        }
      },
    }
  };

  it('should validate lookup value', function (done) {
    t.validateField('awesome', template, true, done);
  });

  it('should not validate bad lookup value date', function (done) {
    t.validateField('invalid', template, false, done);
  });

  it('lookup parent is required for validation', function (done) {
    t.validateField('lookupWithCategory', template, true, done);
  });

  it('lookup parent not matching selected option is invalid', function (done) {
    t.validateField('lookupWithCategoryInvalid', template, false, done);
  });
});
