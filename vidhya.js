/**
 * Created by Shyam Prasad on 11/8/2015.
 */

var myfav = require("./dishes");

myfav.favdish="idli";

function printfav(){
    console.log("vidhya's favorite dish is: ",myfav.favdish);
}

module.exports.printfav=printfav;