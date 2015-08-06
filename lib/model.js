function validationResult(valid, errors) {
   return {"valid" : valid, "errors": errors};
};

function fieldError(field, error) {
   return {"field" : field, "error": error};
};

function error(code, message) {
   return {"code" : code, "message": message};
};

module.exports = {
    error: error,
    validationResult : validationResult,
    fieldError : fieldError
};