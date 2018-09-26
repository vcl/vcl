#!/usr/bin/env node

var fs = require('fs');
// var request = require('request');
var util = require('util');
var exec = require('child_process').exec;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var subDirs = ['./modules', './tools','./themes']
var list = []


console.log('Module count: ' + list.length);

console.log('=======Mass NPM Op========');
console.log('+ 1  - Patch             +');
console.log('+ 2  - Minor release     +');
console.log('+ 3  - Major release     +');
console.log('+ 4  - NPM publish       +');
console.log('==========================');

var valid = false;
var action = '';

rl.question('Option: ', function(answer) {
  var option = parseInt(answer);
  if (isNaN(answer)) {
    console.log('How about you put a number?');
  }
  else {
    var options = {
      1: 'patch',
      2: 'minor',
      3: 'major',
      4: 'publish'
    };

    action = options[answer];

    if (!action) {
      console.log('A correct option would be great...');
    }
    else {
      console.log('Your option is: ', action);
      valid = true;
      var command = {
        patch: 'npm version patch',
        minor: 'npm version minor',
        major: 'npm version major',
        publish: 'npm publish'
      }[action];
      subDirs.forEach(function(subdir) {
        fs.readdir(subdir, function(err, npmModules) {
          if (err) {
            console.log(err);
            return;
          }

          try {
            process.chdir(subdir + '/' );
          }
          catch (err) {
            console.log(err)
          }

          npmModules.forEach(function(npmModule) {
            var dir = npmModule + '/';
            try {
              process.chdir(dir);
            }
            catch (err) {
              console.log(err)
            }

            (function(npmModule) {
              child = exec(command, function(error, stdout, stderr) {
                console.log('Running: ' + command);
                console.log('In module: ' + npmModule)
                console.log('Output: '+ stdout);

                if (error !== null) {
                  console.log('exec error for module ' + npmModule, error);
                }
              
              });

            })(npmModule);
            try {
              process.chdir('..');
            }
            catch (err) {
              console.log(err)
            }
          });
          try {
            process.chdir('..');
          }
          catch (err) {
            console.log(err)
          }
        });
      });
    }
  }

  rl.close();
});
