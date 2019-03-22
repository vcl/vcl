// Check whether vcl modules are not dependent
// from deprecated (which are not in vcl/modules folder) vcl modules

// After running this script, run set_difference

const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(process.cwd(), './package.json');
const depSetPath = path.resolve(__dirname, "./dep_set.txt");
const folderSetPath = path.resolve(__dirname, "./folder_set.txt");

const package = JSON.parse(fs.readFileSync(packagePath, "utf-8"));

// let arr = fs.readFileSync(depSetPath, "utf-8").split(" \n ");
// if (arr[0] === "") {
//     arr = [];
// }

arr = [];
function collect(obj) {
    Object.keys(obj).forEach((val) => {
        if (val.includes("@vcl")) {
            arr.push(val.substring(val.lastIndexOf("/") + 1, val.length));
        }
    });
}

collect(package["dependencies"]);
collect(package["devDependencies"]);

fs.appendFileSync(depSetPath, "\n" + arr.join("\n"));

let folderPath = path.resolve(process.cwd());
let folderName = folderPath.substring(folderPath.lastIndexOf("/") + 1, folderPath.length);

fs.appendFileSync(folderSetPath, "\n" + folderName + "\n");