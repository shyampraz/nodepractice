/**
 * Created by Shyam Prasad on 11/9/2015.
 */
var http = require("http");

function onRequest(request,response){
    console.log("Server connected to client");
    //response.writeHead(200,{"content-type":"text/plain"});
    response.write("hello how are you");
    response.end();

}

http.createServer(onRequest).listen(8888);
console.log("server running");