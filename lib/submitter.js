/// <reference path="../typings/mustache/mustache.d.ts"/>

var mustache = require('mustache');
var submissionFactory = require("./submission/submissionFactory");

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