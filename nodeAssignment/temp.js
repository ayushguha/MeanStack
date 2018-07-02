var http=require("http");

//var data=require("./inventory");
var outside=require('./external');

http.createServer(function(req,res){
    if(req.url==="/farenheit"){
         res.end(outside.farenheit(40).toString());
    }
    else if(req.url==="/rectangle"){
        
        res.end(outside.rectangle(20,30).toString());
        }
    else if(req.url==="/celcius"){
        
    res.end(outside.celcius(60).toString());
    } else{
        res.end("404 error...data not found");
    }
}).listen(3000);

console.log("server listening on port 3000");
