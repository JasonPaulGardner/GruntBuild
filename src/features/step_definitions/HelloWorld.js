
var stepDefs = function () {
    this.World = require("../support/world.js").World;

    this.When(/^I visit the demo site$/, function (callback) {
        this.browser
      .chain
      .session()
      .open('/')
      .setSpeed(3000)
      .end(function(err){
        if (err){
          callback.fail(err);
        } else {
          callback();
        };
      });
    });

    this.Then(/^the text "([^"]*)" is displayed$/, function (dtext, callback) {
        this.browser
      .chain
      .assertTextPresent(dtext)
      .end(function(err){
        if (err){
          callback.fail(err);
        } else {
          callback();
        };
    });
});

    this.Given(/^an image of the world is shown$/, function (callback) {
        callback.pending();
    });

}




module.exports = stepDefs;