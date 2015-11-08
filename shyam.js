/**
 * Created by Shyam Prasad on 11/8/2015.
 */
var myfav= require("./dishes");

var myonlyfav= myfav();

function printfav(){
    console.log("Shyam's favorite dish is: ",myonlyfav.favdish);
}

module.exports.printfav=printfav;