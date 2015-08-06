var stringValidator = require("./stringValidator");
var oneOfValidator = require("./oneOfValidator");
var dateValidator = require("./dateValidator");
var datetimeValidator = require("./datetimeValidator");
var numberValidator = require("./numberValidator");

exports.validate = function (required, field, errors) {
    switch (field.type) {
        case "string":
            stringValidator.validate(required, field, errors);
            return;
        case "oneOf":
            oneOfValidator.validate(required, field, errors);
            return;
        case "date":
            dateValidator.validate(required, field, errors);
            return;
        case "datetime":
            datetimeValidator.validate(required, field, errors);
            return;
        case "number":
            numberValidator.validate(required, field, errors);
            return;
        default:
            break;
    }
}