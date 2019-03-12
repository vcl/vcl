let fs = require("fs");
let path = process.argv[2];
let text = fs.readFileSync(path + "/package.json", "utf-8");

const package = JSON.parse(text);
let devDeps = package["devDependencies"];

// Delete all unused imports of vcl modules from devDeps
text = fs.readFileSync(path + "/index.sss", "utf-8");
let arr = text.split("\n");

arr.forEach((str,index) => {
    if (str.includes("@import") && !(str.includes("normalize") || str.includes("theme"))) {
        arr.splice(index,1);
    }
});

fs.writeFileSync(path + "/index.sss", arr.join("\n"));


// Add devDeps vcl modules to demo.sss
arr = [];
Object.keys(devDeps).forEach((str) => {
    if (str.includes("@vcl") && !(str.includes("preprocessor") || str.includes("build-demo"))) {
        arr.push("@import \"" + str + "\"");
    }
});

arr.push("@import \"./index.sss\"");
fs.writeFileSync(path + "/demo.sss", arr.join("\n"));




