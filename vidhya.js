/**
 * Created by Shyam Prasad on 11/8/2015.
 */

var myfav = require("./dishes");

var myonlyfav = myfav();

myonlyfav.favdish="idli";
function printfav(){
    console.log("vidhya's favorite dish is: ",myonlyfav.favdish);
}

module.exports.printfav=printfav;