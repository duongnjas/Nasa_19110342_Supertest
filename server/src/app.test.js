const app = require('./app');
const request = require('supertest')

describe('GET /planets', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/planets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
});

describe('GET /launches', function() {
    it('Missing launch props', function(done) {
      request(app)
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
});

describe('POST /launches', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/launches')
        .send({
            "mission": "ZTM166",
            "rocket":"ZTM Experimental AS1",
            "launchDate": "January 16, 2030",
            "target": "Kepler-186 f"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it('Invalid launch date', function(done) {
        request(app)
          .post('/launches')
          .send({
              "mission": "ZTM166",
              "rocket":"ZTM Experimental AS1",
              "launchDate": "abc",
              "target": "Kepler-186 f"
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });

      it('Missing launch props', function(done) {
        request(app)
          .post('/launches')
          .send({
              "mission": "",
              "rocket":"ZTM Experimental AS1",
              "launchDate": "abc",
              "target": "Kepler-186 f"
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
  });

  describe('DELETE /launches/100', function() {
    it('delete launch id = 100', function(done) {
      request(app)
        .delete('/launches/101')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
});