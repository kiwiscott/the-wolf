/// <reference path="../../typings/tsd.d.ts"/>
var Promise = require('promise');
var log4js = require('log4js');
var applog = log4js.getLogger("dataFile");


module.exports = DataFile;
 var that = null;
 
function DataFile(config) {
    applog.debug('Creating DataFile');
    that = this;
    that.config = config;
}

DataFile.prototype.validate = function (lookupValue) {
    var filter = function (d) {
        return d[that.config.valueField || ''] === lookupValue;
    };
    return that.processFilter(filter);
}
DataFile.prototype.validateWithCategory = function (lookupValue, category) {
    var filter = function (d) {
        return d[that.config.categoryField || ''] === category
            && d[that.config.valueField || ''] === lookupValue;
    };

    return that.processFilter(filter);
}

DataFile.prototype.query = function (lookupValue) {
    var lookupLower = lookupValue.toLowerCase();
    
    var filter = function (d) {
        return that.config.queryFields.some(function (qf) {
            return (d[qf] || '').toLowerCase().indexOf(lookupLower) != -1;
        });
    };
    return that.processFilter(filter);
};

DataFile.prototype.queryWithCategory = function (lookupValue, category) {
    var lookupLower = lookupValue.toLowerCase();

    var filter = function (d) {
        return (d[that.config.categoryField] || '') === category
            && that.config.queryFields.some(function (qf) {
                return (d[qf] || '').toLowerCase().indexOf(lookupLower) != -1;
            });
    };

    return that.processFilter(filter);
};

DataFile.prototype.processFilter = function (filter) {
    return new Promise(function (resolve, reject) {
        var result = that.config.data.filter(filter);
        resolve(result);
    });
};


