var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var obj=require('./NetPay');
var MongoClient=require('mongodb').MongoClient;

http.createServer(function(req,res){
    console.log(req.method);
    if(req.method=="GET"){
       
        res.writeHead(200,{"content-type":"text/html"});
fs.createReadStream("./formForEmployee.html").pipe(res);

    }else if(req.method=="POST"){
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");

        });

        req.on("end",function(){
            var obj1=qs.parse(body);
            var BP = parseFloat(obj1.basicPay);
            var C = obj.calculateNetPay(BP);
            var EmployeeId=obj1.employeeId;
            var EmployeeName=obj1.EmployeeName;

            res.end(`
            <!DOCTYPE html>
<html>
<head>
<title>NET PAY</title>
</head>
<body>
<div align="center">
<h1 style="color:Tomato;">NET PAY</h1>
       <form action="/"method="POST">
	<label>calculateNetPay</label>
       <input type="text"name="basicPay" value=${C}>
         
</div>
</form>
</body>
</html>
             
            `);
            
            MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
                if (err) throw err;
                var dbo = db.db("Employee");
                var ins = {EmployeeId:EmployeeId,EmployeeName:EmployeeName,NetPay:C};
                dbo.collection("emp").insertOne(ins, function(err) {
                  if (err) throw err;
                  console.log("1 document inserted in database");
                  
                  db.close();
                });
              });
    });
    }}).listen(3000);
    console.log("form server listening on port 3000");
    