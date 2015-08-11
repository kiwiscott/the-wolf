/// <reference path="../../typings/tsd.d.ts"/>

var mustache = require('mustache');
var submissionFactory = require("./submissionFactory");

function submit(template) {
    var submitter = submissionFactory.submitter(template.id);
    var body = buildTemplate(template, submitter) 
    return submitter.send(body);
};

function buildTemplate(template, submitter) {
    var body = mustache.render(submitter.body, template);
    return body;
}

module.exports = {
    submit: submit,
    buildTemplate : buildTemplate
};