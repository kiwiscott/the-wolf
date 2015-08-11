/// <reference path="../typings/tsd.d.ts"/>
var fs = require('fs');
var path = require('path');
var Promise = require('promise');

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
exports.save = function (id, data, callback) {
  return new Promise(function (resolve, reject) {
    var file = path.join(path.resolve('./.data/forms') + '/' + id + ".json");
    fs.writeFileSync(file, data, function (err) {
      if (err) {
        reject(err);
      }
      resolve(true);
    });

  });
}


exports.findById = function (id, callback) {
  return new Promise(function (resolve, reject) {
    var file = path.join(path.resolve('./.data/forms') + '/' + id + ".json");
    fs.readFile(file, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });


}

exports.submitter = function (formId) {
  return {
    body: ""
  }
};

