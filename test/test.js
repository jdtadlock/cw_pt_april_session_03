var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

// describe('/GET api test route', function() {
//   it('it should return an object', function(done) {
//     chai.request(server)
//       .get('/api/tests')
//       .end(function(err, req) {
//         req.should.have.status(200);
//         req.body.should.be.a('object');
//         req.body.title.should.be.a('string');
//         done();
//       });
//   });
// });

describe('/GET api posts', function () {
  it('should return an array of posts', function (done) {
    chai.request(server)
      .get('/api/posts')
      .end(function (err, req) {
        req.should.have.status(200);
        req.body.should.be.a('array');
        req.body.should.not.be.lengthOf(0);
        done();
      });
  });
});