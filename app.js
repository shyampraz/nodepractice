var path= require("path");

var webhome = "Desktoo/Shyam//index.txt";
var webaddr = "Desktop/Shyam/addr.txt";

console.log(path.normalize(webhome));
console.log(path.dirname(webaddr));
console.log(path.extname(webaddr));
console.log(path.basename(webaddr));