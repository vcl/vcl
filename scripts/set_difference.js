// Reads two text files module names, put them to sets and find difference

const fs = require('fs');
const path = require('path');

const depSetPath = path.resolve(__dirname, "./dep_set.txt");
const folderSetPath = path.resolve(__dirname, "./folder_set.txt");

const depSet  = [...new Set(fs.readFileSync(depSetPath, "utf-8").split("\n").sort())];
const folderSet = [...new Set(fs.readFileSync(folderSetPath, "utf-8").split("\n").sort())];

const difference = depSet.filter(module => !folderSet.includes(module));
console.log(difference);