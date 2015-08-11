/// <reference path="../../typings/tsd.d.ts"/>
var Sql = require('./sql');
var DataFile = require('./dataFile');
var path = require('path');
var fs = require('fs');
var lookups = new Object();

module.exports = {
    validate: validate,
    query: query
};

function validate(lookupKey, lookupValue, category) {
    var lu = lookup(lookupKey);

    return (category == null || category === '')
        ? lu.validate(lookupValue)
        : lu.validateWithCategory(lookupValue, category);

};
function query(lookupKey, lookupValue, category) {
    var lu = lookup(lookupKey);

    return (category == null || category === '')
        ? lu.query(lookupValue)
        : lu.queryWithCategory(lookupValue, category);
}

//Private 
function lookup(lookUpId) {
    if (!lookups.hasOwnProperty(lookUpId)) {
        lookups[lookUpId] = buildIt(lookUpId);
    }
    return lookups[lookUpId];
};

function buildIt(lookUpId) {
    var config = require('../../.data/lookups' + '/' + lookUpId + ".json");
    switch (config.type) {
        case "sql":
            return new Sql(config);
        case "data":
            return new DataFile(config);
        default:
            break;
    }
}
