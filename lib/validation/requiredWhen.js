/* global t */
exports.isRequired =  function(field, template) {
    if ((field.validation || null) == null || field.validation.requiredWhen == null || field.validation.requiredWhen === '') {
        return false;
    }
    if (field.validation.requiredWhen == 'always') {
        return true;
    }

    var test = createRequiredWhenTest(field.validation.requiredWhen, template);
    eval(test);
    return t(template.data);
}

function createRequiredWhenTest(requiredWhen, template) {
    var temp = requiredWhen;
    for (var m in template.data) {
        temp = temp.replace('x-' + m, 'x.' + m + '.value');
    }

    var requiredWhenTest = "function t(x) { return " + temp + ";}";
    return requiredWhenTest;
}
