const fs = require('fs');
const path = require('path');

let indexPath = path.resolve(process.cwd(), './index.sss');
let text = fs.readFileSync(indexPath, "utf-8");

console.log("-------------------------");
console.log(indexPath);
text.split("\n").map((str) => {
    if (str.includes("import")) {
        console.log(str);
    }
});
console.log("-------------------------");

