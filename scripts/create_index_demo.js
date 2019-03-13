const fs = require('fs');
const path = require('path');

let packagePath = path.resolve(process.cwd(), './package.json');
let text = fs.readFileSync(packagePath, "utf-8");

const package = JSON.parse(text);
let devDeps = package["devDependencies"];

// Delete all unused imports of vcl modules from devDeps
text = fs.readFileSync(process.cwd() + "/index.sss", "utf-8");
let arr = text.split("\n");

arr.forEach((str, index) => {
    if (str.includes("@import") && !(str.includes("normalize") || str.includes("theme"))) {
        arr.splice(index, 1);
    }
});

fs.writeFileSync(process.cwd() + "/index.sss", arr.join("\n"));


// Add devDeps vcl modules to demo.sss
arr = [];
Object.keys(devDeps).forEach((str) => {
    if (str.includes("@vcl") && !(str.includes("preprocessor") || str.includes("build-demo"))) {
        arr.push("@import \"" + str + "\"");
    }
});

arr.push("@import \"./index.sss\"");
fs.writeFileSync(process.cwd()  + "/demo.sss", arr.join("\n"));



