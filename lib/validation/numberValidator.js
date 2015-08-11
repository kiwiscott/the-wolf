var Promise = require("promise");

exports.validate = function (required, field) {
    return new Promise(function (res, rej) {
        var errors = [];
        if (required && field.value == null) {
            errors.push('Field is required');
            res(errors);
        }
        if (isNaN(field.value)) {
            errors.push('A numeric falue is required');
            res(errors);
        }
        if (field.validation != null && field.validation.minimumValue != null) {
            if (field.value < field.validation.minimumValue) {
                errors.push('Value must be greater than (or equal to)' + field.validation.minimumValue);
            }
        }
        if (field.validation != null && field.validation.maximumValue != null) {
            if (field.value > field.validation.maximumValue) {
                errors.push('Value must be less than (or equal to)' + field.validation.maximumValue);
            }
        }
        res(errors);
    });
};