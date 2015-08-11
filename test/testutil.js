var validator = require('../lib/validation/validator');

function error(done) {
    done();
};

function validateField(fieldName, template, expectedResult, done, expectedErrors) {
    validator.validateField(fieldName, template)
        .then(function (res) {
            if (expectedErrors != null) {
                res.error.length.should.equal(expectedErrors.length);
                res.error.should.containDeep(expectedErrors);
            }
            var result = res == null ? true : false; 
            result.should.equal(expectedResult);
        }).done(function (s) {
            done();
        });
};


module.exports = {
    error: error,
    validateField: validateField
};