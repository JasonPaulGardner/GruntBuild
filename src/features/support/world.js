var expect = require('chai').expect;
var assert = require('chai').assert;
var selenium          = require('selenium-launcher');
var soda              = require('soda');
var browser           = null;

var World = function(callback){
  this.assert = assert;
  this.expect = expect;
  if (browser == null) {
    selenium(function(err,selenium){
      browser = soda.createClient({
        host:     selenium.host,
        port:     selenium.port,
        url:      "http://localhost:9001",
        browser:  "firefox"
      });

      this.browser = browser;
      callback({browser: this.browser});
      process.on('exit', function(){
        selenium.kill();
      });
    });

  } else {
    this.browser = browser;
    callback({browser: this.browser});
  }
  
};

exports.World = World;
