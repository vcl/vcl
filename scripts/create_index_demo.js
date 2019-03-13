const fs = require('fs');
const path = require('path');

let packagePath = path.resolve(process.cwd(), './package.json');
let text = fs.readFileSync(packagePath, "utf-8");

const package = JSON.parse(text);
let devDeps = package["devDependencies"];

// Delete all unused imports of vcl modules from devDeps
text = fs.readFileSync(process.cwd() + "/index.sss", "utf-8");
let arr = text.split("\n");

let i = 0;
while (i < arr.length) {
    let str = arr[i];
    if (str.includes("@import") && !(str.includes("normalize") || str.includes("theme"))) {
        arr.splice(i, 1);
        i--;
    }
    i++;
}

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



