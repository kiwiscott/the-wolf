/* global t */
var Promise = require("promise");

exports.isRequired = function (field, template) {
    return new Promise(function (resolve, reject) {
        var res = function(r){
            resolve(r);
            return; 
        }
        if ((field.validation || null) == null || field.validation.requiredWhen == null || field.validation.requiredWhen === '') {
            return res(false);
        }


        if (field.validation.requiredWhen == 'always') {
            return res(true);
        }

        var test = createRequiredWhenTest(field.validation.requiredWhen, template);
        eval(test);
        return res(t(template.data));

    });
}

function createRequiredWhenTest(requiredWhen, template) {
    var temp = requiredWhen;
    for (var m in template.data) {
        temp = temp.replace('x-' + m, 'x.' + m + '.value');
    }

    var requiredWhenTest = "function t(x) { return " + temp + ";}";
    return requiredWhenTest;
}
