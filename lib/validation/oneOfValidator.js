
exports.validate = function (required, field, errors) {
    if (required && field.value == null) {
        errors.push('Field is required');
        return;
    }

    var selected = field.options.filter(function (e) { return e.value == field.value; });
    if (required && selected.length == 0) {
        errors.push('Value must be one of the options specified');
    } else if (field.value != null && selected.length == 0) {
        errors.push('Value must be one of the options specified');
    }
}