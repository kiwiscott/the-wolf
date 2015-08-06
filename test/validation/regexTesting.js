/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>

var should = require('should');
var validator = require('../../lib/validator.js');

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
  
  it('should not allow not required but invalid', function () {
    validator.validateOne(template.data.notrequiredinvalid, template).valid.should.equal(false);
  });
  it('should match min length', function () {
    validator.validateOne(template.data.minLength3, template).valid.should.equal(true);
  });

  it('should match min length and no max', function () {
    validator.validateOne(template.data.minLength3b, template).valid.should.equal(true);
  });
  
  it('should be valid if the reg ex is meet', function () {
    validator.validateOne(template.data.email, template)
      .valid.should.equal(true);
  });

  it('should not be valid if the reg ex is not meet', function () {
    validator.validateOne(template.data.bademail, template)
      .valid.should.equal(false);
  });
});