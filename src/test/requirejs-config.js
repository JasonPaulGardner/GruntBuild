// file: test/require-config.js
(function(window) {
  var contextId = 0;

  window.testRequire = function(moduleIds, options, callback) {
    var toMock = options && options.mocks;
    var config = {
      baseUrl: '../src',
      urlArgs: 'now=' + Date.now(),
      context: 'test-context' + contextId++,
      paths: {
        tests: '../test/tests',
        helpers: '../test/helpers'
      }
    };
    var map, context;

    if (toMock) {
      map = {
        '*': {}
      };
      toMock.forEach(function(id) {
        // **Important:** This assumes you have organized all your mocks in a
        // directory named `mocks`, and that their filename is identical to
        // that of the module they emulate. If you want a simple API for the
        // `testRequire` function, you will have to organize your files
        // rigorously.
        var mockId = '../test/mocks/' + id;

        // Any module that requires the module in this context should receive
        // the mock instead.
        map['*'][id] = mockId;

        // If the mock itself requires the module, then it should get the real
        // thing.
        map[mockId] = {};
        map[mockId][id] = id;
      });

      config.map = map;
    }

    context = requirejs.config(config);

    return context.call(this, moduleIds, callback);
  };
}(typeof global === 'undefined' ? this : global));