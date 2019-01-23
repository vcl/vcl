'use strict';
/* global describe, it */

var assert = require('assert');
var vcl = require('../index');

var opts = {root: __dirname};
// var opts = {root: process.cwd()};

describe('vcl', function() {
  it('should be a function', function() {
    assert.equal(typeof vcl, 'function');
  });

  it('should throw if there is no css input', function() {
    assert.throws(function() {
      vcl();
    }, Error);
  });

});

describe('vcl object', function() {
  var compiler = vcl('body\n  color: blue');

  it('should be an object', function() {
    assert.equal(typeof compiler, 'object');
  });

  it('should return the compiled css string', function() {
    return compiler.then(function (result) {
      assert.equal(typeof result.css, 'string');
    });

  });

  it('should return valid css', function() {
    return compiler.then(function (result) {
      assert.equal(result.css, 'body {\n  color: blue\n}\n');
    });

  });

  it('should return valid css without any options set', function() {
    let anotherCompiler = vcl('body\n  color: rgba(#ccc, .5)');

    return anotherCompiler.then(function (result) {
      assert.equal(result.css, 'body {\n  color: rgba(204,204,204, .5)\n}\n');
    });

  });


  it('should include local files', function() {

    assert.equal(typeof compiler, 'object');


    let anotherCompiler = vcl(`@import "./fixtures/test.css"`, opts);

    return anotherCompiler.then(function (result) {
      // console.log(result.css);
      assert.equal(typeof result.css, 'string');
      assert.equal(result.css, 'body{\n  background: red;\n}\n');
    });

  });

  it('should include npm imports', function() {
    var anotherCompiler = vcl('@import "@vcl/default-theme-terms"', opts);
    return anotherCompiler.then(function (result) {
      // console.log('result.css', result.css);
      assert.equal(typeof result.css, 'string');
    });

  });

});

// describe('compiling packages', function() {

//   it('should throw if the entry style is not defined', function() {
//     assert.throws(function() {
//       var compiledPackage = vcl.package('./package.json', {npm: {root: __dirname}});
//       var result = compiledPackage.toString();
//       // console.log(result);
//     }, Error);
//   });

//   it('should compile and read a valid package', function(done) {
//     var compiledPackage = vcl.package('./test/fixtures/project.json', {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 100, 'result should be longer than 100 chars');
//       done();
//     })
//       .catch((error)=> {
//         console.log(error);
//       });
//   });

//   it('should compile a valid package (object)', function(done) {
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       //  console.log('result', result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should compile a with normal css mixed in', function(done) {
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version',
//         'normalize.css': '*'
//       },
//       style: './test/fixtures/project.sss'
//     }, {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       //console.log('result', result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should compile without any options set', function(done) {
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     });

//     compiledPackage.then(function (result) {
//       // console.log('result', result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();

//     });
//   });

//   it('should throw if a dependency is missing', function() {
//     assert.throws(function() {
//       var compiledPackage = vcl.package({
//         name: 'my-awesome-project-object',
//         dependencies: {
//           'missing': '^3.4.5'
//         },
//         style: './test/fixtures/project.sss'
//       }, {npm: {root: __dirname}});

//       compiledPackage.then(function (result) {
//         // console.log('result', result);
//       }).catch((error)=> {
//         console.log(error);
//       });;
//     }, /No file or npm module.*/);
//   });

//   it('should throw if two packages provide the same thing', function() {
//     opts.providers = {
//       'theme-terms': {
//         name: 'some-theme-terms',
//         vcl: {
//           provides: ['theme-terms']
//         }
//       }
//     };

//     assert.throws(function() {
//       var compiledPackage = vcl.package({
//         name: 'my-awesome-project-object',
//         dependencies: {
//           '@vcl/default-theme-terms': '^3.4.5',
//         },
//         style: './test/fixtures/project.sss'
//       }, opts);

//       compiledPackage.then(function (result) {
//         // console.log('result', result);
//       });


//     }, /There can only be one.*provider/);
//     delete opts.providers;
//   });

//   it('should work with modules which use strings for vcl.provide', function(done) {
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version',
//       },
//       style: './test/fixtures/project.sss',
//       vcl: {
//         provides: 'awesome-stuff'
//       }
//     }, {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should work with modules which use strings for vcl.needs', function(done) {

//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version',
//       },
//       style: './test/fixtures/project.sss',
//       vcl: {
//         provides: 'awesome-stuff',
//         needs: 'theme-terms'
//       }
//     }, {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       // console.log(result.css);

//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });

//   });

//   it('should throw for modules which use strings for vcl.needs but are not satisfied', function() {
//     assert.throws(function() {
//       var compiledPackage = vcl.package({
//         name: 'my-awesome-project-object',
//         dependencies: {
//           '@vcl/default-theme-terms': 'some-version',
//         },
//         style: './test/fixtures/project.sss',
//         vcl: {
//           provides: 'awesome-stuff',
//           needs: 'not-there'
//         }
//       }, {npm: {root: __dirname}});

//       compiledPackage.then(function (result) {
//         // console.log('result', result);
//       });

//       // compiledPackage.toString();
//     }, /.*module my-awesome-project-object needs not-there.*/);
//   });

//   it('should skip non vcl dependencies', function(done) {
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version',
//         'mocha': '*'
//       },
//       style: './test/fixtures/project.sss'
//     }, {npm: {root: __dirname}});

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });

//   });

//   it('should include dev dependencies if option is set & no normal deps are set', function(done) {
//     let opts = {npm: {root: __dirname}};

//     opts.includeDevDependencies = true;
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       devDependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should include dependencies if option is set & no dev deps are set', function(done) {
//     let opts = {npm: {root: __dirname}};

//     opts.includeDevDependencies = true;
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });

//   });

//   it('should include dev dependencies if option is set', function(done) {
//     let opts = {npm: {root: __dirname}};

//     opts.includeDevDependencies = true;
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {},
//       devDependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should not throw if a dev dependency is not found', function(done) {
//     let opts = {npm: {root: __dirname}};

//     opts.includeDevDependencies = true;
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {},
//       devDependencies: {
//         '@vcl/default-theme-terms': 'some-version',
//         'does-not-exist': '1.0',
//         'half-life': '3'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);


//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 200, 'result should be longer than 200 chars');
//       done();
//     });
//   });

//   it('should not throw if docGenMode is set and packages are not found', function(done) {
//     let opts = {npm: {root: __dirname}};

//     opts.includeDevDependencies = true;
//     opts.docGenMode = true;
//     var compiledPackage = vcl.package({
//       name: '@vcl/default-theme-terms',
//       dependencies: {
//         'not-found': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length > 20, 'result should be longer than 20 chars');
//       done();
//     });

//     opts.docGenMode = false;
//   });

//   it('should throw if there is a missing provider', function() {
//     let opts = {npm: {root: __dirname}};

//     assert.throws(function() {
//       opts.includeDevDependencies = true;
//       var compiledPackage = vcl.package({
//         name: 'my-awesome-project-object',
//         dependencies: {},
//         devDependencies: {
//           '@vcl/default-theme-terms': 'some-version',
//         },
//         style: './test/fixtures/project.sss',
//         vcl: {
//           needs: ['some-provider']
//         }
//       }, opts);

//       compiledPackage.then(function (result) {
//         // console.log('result', result);
//       });

//       // compiledPackage.toString();
//     }, /.*needs some-provider.*/);
//   });

//   it('should not include dev depdendencies if option is set', function(done) {
//     let opts = {npm: {root: __dirname}};
//     opts.includeDevDependencies = false;
//     var compiledPackage = vcl.package({
//       name: 'my-awesome-project-object',
//       dependencies: {},
//       devDependencies: {
//         '@vcl/default-theme-terms': 'some-version'
//       },
//       style: './test/fixtures/project.sss'
//     }, opts);

//     compiledPackage.then(function (result) {
//       // console.log(result.css);
//       assert.ok(result.css.length < 100, 'result should not be longer than 100 chars');
//       done();
//     });
//   });

// });
