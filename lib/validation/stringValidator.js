
exports.validate = function(required, field, errors){
    if (required && field.value == null) {
            errors.push('Field is required');
            return;
            
    } 
    if(field.validation.pattern != null)
    {
         var re = RegExp(field.validation.pattern);
            if (!re.test(field.value)){
                errors.push('Field dpes not match required pattern');
            }
    }    
}