
var server = require("http-server").createServer();
var assert = require('chai').assert;
var Browser = require('zombie');
var sinon = require('sinon');

describe("Interface", function() {

  var spy = sinon.spy();

  var browser = new Browser({ site: 'http://localhost:3000'  });
  server.listen(4000);

  beforeEach(function(done){
    browser.visit('/', done);
  });

  afterEach(function() {
    server.close();
  });

  it('page loads', function(){
    browser.assert.status(200);
  });



});
