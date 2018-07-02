var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var obj=require('./external');

http.createServer(function(req,res){
    console.log(req.method);
    if(req.method=="GET"){
        //res.writeHead(200,{"content-type":"text/plain"});
        res.writeHead(200,{"content-type":"text/html"});
fs.createReadStream("./fahen-cel.html").pipe(res);

    }else if(req.method=="POST"){
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");
        });

        req.on("end",function(){
            var obj1=qs.parse(body);
            console.log(obj1.faren); 
             var faren = parseFloat(obj1.faren);
            var celcius = obj.farenheit(faren);

            
            
            //res.end("fahrenheit="+faren.toString()+"celcius="+celcius.toString())

            res.end(`
            <!DOCTYPE html>
<html>
<head>
<title>fill out this form</title>
</head>
<body>
       <h1>fill out this form</h1>
       <form action="/"method="post">
	<label>farenheit</label>
       <input type="text"  name="faren"placeholder="enter temp"  value=${faren}>
           
       <label>celcius</label>
       <input type="text"  name="celcius" value=${celcius}>

       <button>convert</button>

</form>
</body>
</html>
             
            `);
        });
    }
}).listen(3000);

console.log("form server listening on port 3000");