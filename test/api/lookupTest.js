/// <reference path="../../typings/tsd.d.ts"/>

/*
ALL TESTING RESULTS ARE BASED ON BOOK.SQK IN THIS DIRECTORY
*/
'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../../app').app;
describe('Lookup Integration Testing', function () {

  it('validate azure lookup for value 5 should one result', function (done) {
    request(app)
      .get('/api/lookup/azure?v=5')
      .expect(200)
      .end(function (err, res) {
        should(res.body.length).equal(1);
        should(res.body[0]).Title = 'The Adventures of Huckleberry Finn';
        should(res.body[0]).Author = 'Mark Twain';
        should(res.body[0]).Country = 'United States';
        should(res.body[0]).value = '5';
        done(); 
      });
  })

  it('query for united should return 10 results', function (done) {
    request(app)
      .get('/api/lookup/azure?q=united')
      .expect(200)
      .end(function (err, res) {
        should(res.body.length).equal(10);
        var beloved = { Author: 'Toni Morrison', Country: 'United States', Published: '(b. 1931)', Title: 'Beloved', TotalViews: 7, UploadTime: '2015-08-14T00:00:00.000Z', value: '8' };
        var theCompleteTales = { Author: 'Edgar Allan Poe', Country: 'United States', Published: '(1809-1849)', Title: 'The Complete Tales', TotalViews: 7, UploadTime: '2015-08-14T00:00:00.000Z', value: '21' };

        res.body.should.containEql(theCompleteTales);
        res.body.should.containEql(beloved);
        done();
      });
  })

  it('query for the should return 43 results', function (done) {
    request(app)
      .get('/api/lookup/azure?q=the')
      .expect(200)
      .end(function (err, res) {
        should(res.body.length).equal(43);
        var trilogy = { Author: 'Samuel Beckett', Country: 'Ireland', Published: '(1906-1989)', Title: 'Trilogy: Molloy,Malone Dies,The Unnamable', TotalViews: 7, UploadTime: '2015-08-14T00:00:00.000Z', value: '96' };
        var wuthering = { Author: 'Emily Brontë', Country: 'England', Published: '(1818-1848)', Title: 'Wuthering Heights', TotalViews: 7, UploadTime: '2015-08-14T00:00:00.000Z', value: '99' };
        var zorba = { Author: 'Nikos Kazantzakis', Country: 'Greece', Published: '(1883-1957)', Title: 'Zorba the Greek', TotalViews: 7, UploadTime: '2015-08-14T00:00:00.000Z', value: '100' };

        res.body.should.containEql(trilogy);
        res.body.should.containEql(wuthering);
        res.body.should.containEql(zorba);
        done();
      });
  })

  it('can filter by query and category', function (done) {
    request(app)
      .get('/api/lookup/azure?c=Ireland&q=the')
      .expect(200)
      .end(function (err, res) {
        should(res.body.length).equal(2);

        var lifeAndOpinions = { value: '51', Title: 'The Life and Opinions of Tristram Shandy', Author: 'Laurence Sterne', Country: 'Ireland', Published: '(1713-1768)', UploadTime: '2015-08-14T00:00:00.000Z', TotalViews: 7 };
        var trilogy = { value: '96', Title: 'Trilogy: Molloy,Malone Dies,The Unnamable', Author: 'Samuel Beckett', Country: 'Ireland', Published: '(1906-1989)', UploadTime: '2015-08-14T00:00:00.000Z', TotalViews: 7 };

        res.body.should.containEql(lifeAndOpinions);
        res.body.should.containEql(trilogy);

        done();
      });
  })

  it('invalid lookup should Return 401 Not Found', function (done) {
    request(app)
      .get('/lookup/azure')
      .expect(401)
      .end(function (err, res) {
        done();
      });
  })
});
