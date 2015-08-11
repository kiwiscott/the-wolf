var Promise = require("promise");

exports.validate = function (required, field) {
    return new Promise(function (res, rej) {
        var errors = [];

        if (required && field.value == null) {
            errors.push('Field is required');
            res(errors);

        }
        if (field.validation.pattern != null) {
            var re = RegExp(field.validation.pattern);
            if (!re.test(field.value)) {
                errors.push('Field dpes not match required pattern');
            }
        }
        res(errors);
    });
}
