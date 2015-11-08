var fs= require("fs");

fs.writeFileSync("file.txt","some random input string");
console.log(fs.readFileSync("file.txt").toString());