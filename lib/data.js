var fs = require('fs');
var path = require('path');

/**
 * Saves a given form definition to the repository
 *
 * Examples:
 *
 *      repo.save(req.params.form_id,JSON.stringify(req.body, null, 2),function(err,ok){
 *        if(err) res.sendStatus(401);
 *        res.sendStatus(200); 
 *      });
 *
 * @id {string} form identifier
 * @data {object} to save
 * @public
 */
exports.save = function(id,data, callback){
  var file = path.join(path.resolve('forms') +'/'+id+".json");
  fs.writeFileSync(file,data, function (err) {
  if (err){
     callback(err,false);
  }
  callback(null,true);
  });
}


exports.findById = function(id,callback){
  var file = path.join(path.resolve('forms') +'/'+id+".json");
  fs.readFile(file, callback);
}

exports.submitter = function(formId){
  return {
    body : ""
  }
};

