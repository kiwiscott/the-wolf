/// <reference path="../../typings/tsd.d.ts"/>
var sql = require('mssql');
var path = require('path');
var Promise = require('promise');
var log4js = require('log4js');
var moment = require('moment')

var applog = log4js.getLogger("sql");


module.exports = Sql;

function Sql(config) {
    this.config = config;
}

Sql.prototype.validate = function (lookupValue) {
    var params = [
        { "name": 'value', 'value': lookupValue }
    ];
    return this.execute(params, this.config.validate, this.config.db);
};

Sql.prototype.validateWithCategory = function (lookupValue, category) {
    var params = [
        { "name": 'category', 'value': category },
        { "name": 'value', 'value': lookupValue }
    ];
    return this.execute(params, this.config.validateWithCategory, this.config.db);
};


Sql.prototype.query = function (lookupValue) {
    var params = [
        { "name": 'value', 'value': '%' + lookupValue + '%' }
    ];
    return this.execute(params, this.config.query, this.config.db);
};

Sql.prototype.queryWithCategory = function (lookupValue, category) {
    var params = [
        { "name": 'category', 'value': category },
        { "name": 'value', 'value': '%' + lookupValue + '%' }
    ];
    return this.execute(params, this.config.queryWithCategory, this.config.db);
};

Sql.prototype.execute = function (parameters, query, db) {
    return new Promise(function (resolve, reject) {
        var start = moment();

        var connection = new sql.Connection(db, function (err) {
            var request = new sql.Request(connection);
            parameters.forEach(function (param) {
                request.input(param.name, sql.VarChar, param.value);
            });
                       
            request.query(query, function (err, recordset) {
                if (err) {
                    reject(err);
                }
                else {
                    var secondsDiff = moment().diff(start, 'milliseconds');
                    applog.debug(secondsDiff + 'ms\t'+ db.database + '\t'  + query);
                    resolve(recordset);
                }
            });

        });
    });
};