var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var eid;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `
            <html>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            
            Employee ID:<input type="text" id="EmployeeId" name="EmployeeId" required/><br>
            
            <button>Submit</button>
            </form></body></html>`
             );
    }
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
   
    });
    req.on("end",function()
{
    var obj1=qs.parse(body);
    var EmployeeId=obj1.EmployeeId;
  
   
    
                
            MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
              if (err) throw err;
              var dbo = db.db("Employee");
              var del = { "EmployeeId":EmployeeId};
             
              var obj=dbo.collection("emp").deleteOne(del, function(err, obj) {
                if (err)
                {
                    res.write(`not find!`)
                }
                res.end(`
            <html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            <label>Employee ID:${EmployeeId} Deleted!</label><br>
            </form></body></html>`);
           
                db.close();
              });
         });
    });
}}).listen(3000);
console.log("form server listening on port 3000");