/**
 * Created by Shyam Prasad on 11/9/2015.
 */
var http = require("http");
var fs= require("fs");


function set404(response){

    response.write("404: webpage not found");
    response.end();

}

function onRequest(request,response){

    if(request.method == "GET" && request.url == "/") {
        console.log("Server connected to client");
        //response.writeHead(200,{"content-type":"text/plain"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        set404(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log("server running");