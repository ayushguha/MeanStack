var http=require("http");

var data=require("./inventory");
var outside=require('./outside');

http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(JSON.stringify(data));
    }else if(req.url==="/instock"){
        outside.listInStock(res);
    }else if(req.url==="/onorder"){
         outside.listOnBackOrder(res);
    }else{
        res.end("404 error...data not found");
    }
}).listen(3000);

console.log("server listening on port 3000");

