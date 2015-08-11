/// <reference path="../../typings/tsd.d.ts"/>
var should = require('should');
var validator = require('../../lib/validation/validator');
var t = require('../testutil');

describe('Regex String Validation', function () {
  var template = {
    "id": "Ce3wr42qwd",
    "data": {
      "email":
      {
        "value": "scott@scott.com",
        "type": "string",
        "validation": {
          "pattern": "^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$",
          "sample": "user@jpmchase.com",
          "requiredWhen": ''
        }
      },
      "bademail":
      {
        "value": "scottXXXXXscottcom",
        "type": "string",
        "validation": {
          "pattern": "^[a-zA-Z]{3,5}$/",
          "xpattern": "^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$",
          "sample": "user@jpmchase.com",
          "requiredWhen": ''
        }
      },
      "minLength3": {
        "value": "App",
        "type": "string",
        "validation": {
          "pattern": "^([a-zA-Z0-9_-]){3,5}$",
          "sample": "xxx",
          "requiredWhen": ''
        }
      },
      "minLength3b": {
        "value": "XXXXXXXXXXXXXXXXXX",
        "type": "string",
        "validation": {
          "pattern": "^([a-zA-Z0-9_-]){3,}$",
          "sample": "xxx",
          "requiredWhen": 'always'
        }
      },
       "notrequiredinvalid": {
        "value": "XXXXXXXXXXXXXXXXXX",
        "type": "string",
        "validation": {
          "pattern": "^([a-zA-Z0-9_-]){3,5}$",
          "sample": "xxx",
          "requiredWhen": ""
        }
      }
    }
  };
  
  it('should not allow not required but invalid', function (done) {
    t.validateField('notrequiredinvalid', template,false,done);
  });
  it('should match min length', function (done) {
    t.validateField('minLength3', template,true,done);
  });

  it('should match min length and no max', function (done) {
    t.validateField('minLength3b', template,true,done);
  });
  
  it('should be valid if the reg ex is meet', function (done) {
    t.validateField('email', template,true,done);
  });

  it('should not be valid if the reg ex is not meet', function (done) {
    t.validateField('bademail', template,false,done);
  });
});
