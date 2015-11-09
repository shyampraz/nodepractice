/**
 * Created by Shyam Prasad on 11/9/2015.
 */
var http = require("http");
var fs= require("fs");
var conn=require("connect");

var app= conn();


function homepage(request,response){
    fs.createReadStream("./index.html").pipe(response);
}

function profile(request,response){
    fs.createReadStream("./profile.html").pipe(response);
}

app.use("/home",homepage);
app.use("/profile",profile);

http.createServer(app).listen(8888);
console.log("server running");