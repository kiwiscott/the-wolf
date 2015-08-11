var stringValidator = require("./stringValidator");
var oneOfValidator = require("./oneOfValidator");
var dateValidator = require("./dateValidator");
var datetimeValidator = require("./datetimeValidator");
var numberValidator = require("./numberValidator");
var lookupValidator = require("./lookupValidator");

exports.validate = function (required, field, template) {
    switch (field.type) {
        case "string":
            return stringValidator.validate(required, field);
        case "oneOf":
            return oneOfValidator.validate(required, field);
        case "date":
            return dateValidator.validate(required, field);
        case "datetime":
            return datetimeValidator.validate(required, field);
        case "number":
            return numberValidator.validate(required,field);
          case "lookup":
            return lookupValidator.validate(required, field, template);
        default:
            break;
    }
}