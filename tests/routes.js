var request = require('supertest');
var should = require('chai').should();
var server = require('./../server.js');
var app = server.app;

describe('Routes', function() {
  describe('GET /', function() {
    it('should render', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /pong', function() {
    it('should render', function(done) {
      request(app)
        .get('/pong')
        .expect(200)
        .end(done);
    });
  });
});