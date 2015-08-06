/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/should/should.d.ts"/>
/// <reference path="../../typings/mustache/mustache.d.ts"/>

var should = require('should');
var mustache = require('mustache');
var os = require('os');

describe('Mustache Template Tests', function () {
    it('should create simple template', function () {
        var baseTemplate = {
            "id": "Ce3wr42qwd",
            "data": {
                "gooddate": { "value": "08-10-2020" },
                "sid": { "value": "O123456" },
                "creation": { "value": "immediately" },
                "service": { "value": "blackberry" }
            }
        };

        var t = "<request>" + os.EOL;
        t += "<sid>{{data.sid.value}}</sid>" + os.EOL;
        t += "<date>{{data.gooddate.value}}</date>" + os.EOL;
        t += "<whenToCreate>{{data.creation.value}}</whenToCreate>" + os.EOL;
        t += "<service>{{data.service.value}}</service>" + os.EOL;
        t += "</request>";

        var output = mustache.render(t, baseTemplate);

        var e = "<request>" + os.EOL;
        e += "<sid>O123456</sid>" + os.EOL;
        e += "<date>08-10-2020</date>" + os.EOL;
        e += "<whenToCreate>immediately</whenToCreate>" + os.EOL;
        e += "<service>blackberry</service>" + os.EOL;
        e += "</request>";

        output.should.equal(e);
    });
});
    