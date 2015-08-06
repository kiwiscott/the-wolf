'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app').app;
describe('API Integration Testing', function () {

  describe('Get Request', function () {
    it('invalid form should Return 401 Not Found', function (done) {
      request(app)
        .get('/api/form/Bobby')
        .expect(401)
        .end(function (err, res) {
          done();
        });
    });

    it('valid form should return 200 and correct document', function (done) {
      request(app)
        .get('/api/form/Ce3wr42qwd')
        .expect(200)
        .end(function (err, res) {
          res.body.template.id.should.equal('Ce3wr42qwd');
          done();
        });
    });
  })
});