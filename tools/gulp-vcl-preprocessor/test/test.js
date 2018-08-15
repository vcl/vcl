/* global describe, it */
'use strict';

var assert = require('assert');
var es = require('event-stream');
var stream = require('stream');
var File = require('vinyl');
var vcl = require('../index');

describe('gulp-vcl-preproccesor', function() {
  describe('in buffer mode', function() {

    it('should compile css', function(done) {
      // create the fake file
      var fakeFile = new File({
        contents: new Buffer('.test\n  color: red')
      });

      var processor = vcl();

      // write the fake file to it
      processor.write(fakeFile);

      // wait for the file to come back out
      processor.once('data', function(file) {
        // make sure it came out the same way it went in
        assert(file.isBuffer());

        // check the contents
        assert.equal(file.contents.toString('utf8'), '.test {\n  color: red;\n}');
        done();
      });
    });

    it('should compile a package', function(done) {
      // create the fake file
      var examplePack = {
        name: 'someProject',
        style: __dirname + '/fixtures/test.styl',
        dependencies: {
          '@vcl/default-theme': '^1.0.0',
          '@vcl/default-theme-terms': '^1.1.0'
        }
      };

      var fakeFile = new File({
        contents: new Buffer(JSON.stringify(examplePack)),
        path: '/test/fixtures/fake.json'
      });

      // Create a vcl plugin stream
      var processor = vcl({
        package: true // thats the important part
      });

      // write the fake file to it
      processor.write(fakeFile);

      // wait for the file to come back out
      processor.once('data', function(file) {
        // make sure it came out the same way it went in
        assert(file.isBuffer());

        // check the contents
        assert.ok(file.contents.toString('utf8').length > 50,
          'output should contain at least 50 chars');
        done();
      });
    });

    it('should include local files', function(done) {
      // create the fake file
      var fakeFile = new File({
        contents: new Buffer('@import "./fixtures/include.css"\n'),
        path: './test/fixtures/fake.styl',
        npm: { root: __dirname }
      });

      // Create a vcl plugin stream
      var processor = vcl();

      // write the fake file to it
      processor.write(fakeFile);

      // wait for the file to come back out
      processor.once('data', function(file) {
        // make sure it came out the same way it went in
        assert(file.isBuffer());

        // check the contents
        assert.equal(file.contents.toString('utf8'), 'body {\n  background: gray\n}');
        done();
      });
    });

    it('should throw if using streams', function(done) {
      // it shoule actually work but..
      var processor = vcl();
      var fakeStream = new stream.PassThrough();
      var fakeFile = new File({
        contents: fakeStream
      });

      fakeStream.write(new Buffer('.test\n'));
      fakeStream.write(new Buffer('  color: blue'));
      fakeStream.end();

      processor.on('error', function(err) {
        assert.equal(err.constructor.name, 'PluginError');
        done(null);
      });

      processor.write(fakeFile);
      processor.end();
    });

    it('should let null files pass through', function(done) {
      var processor = vcl();
      var n = 1;

      processor.pipe(es.through(function(file) {
          assert.equal(file.path, 'null.md');
          assert.equal(file.contents,  null);
          n++;
      }, function() {
          assert.equal(n, 1);
          done();
      }));

      processor.write(new File({
          path: 'null.md',
          contents: null
       }));

      processor.end();
    });

  });
});
