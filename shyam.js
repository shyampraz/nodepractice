/**
 * Created by Shyam Prasad on 11/8/2015.
 */
var myfav= require("./dishes");

function printfav(){
    console.log("Shyam's favorite dish is: ",myfav.favdish);
}

module.exports.printfav=printfav;