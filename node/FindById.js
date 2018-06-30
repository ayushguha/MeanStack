

var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `<html>
           <head>
                   <style>
                        .button2 {background-color:lightcoral;}
                        input[type=text] {
           width: 10%;
           padding: 1px 2px;
           margin: 5px 0;
           box-sizing: border-box;
       }
                           </style>
           </head>
       <body>
               
           <form action="/" method="POST">
               <div align="center">
                       <h1 style="color:#000000;">EMPLOYEE DETAILS</h1>
                   Employee Id: <input type="text" name="EmployeeId" /><br>
                   
                   EmployeeName:<input type="text" name="EmployeeName" /><br>
                   basic Pay:<input type="text" name="basicPay" /><br>
                 
                   Net pay:<input type="text" id="net" name="net"><br>
                   <button class="button button2">DisplayDetail</button>
                   
       
               </div>
           </form>
       
       
       </body>
       </html>
             `);
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
      var find={"EmployeeId":EmployeeId};
       var set= dbo.collection("emp").findOne(find,function(err,set){
        if (err)
        {
            throw err;
        }
        else{
            res.end(`
            <html>
            <head>
                    <style>
                         .button2 {background-color:lightcoral;}
                         input[type=text] {
            width: 10%;
            padding: 1px 2px;
            margin: 5px 0;
            box-sizing: border-box;
        }
                            </style>
            </head>
        <body>
                
            <form action="/" method="POST">
                <div align="center">
                        <h1 style="color:#000000;">EMPLOYEE DETAILS</h1>
                    Employee Id: <input type="text" name="employeeId"value=${EmployeeId} /><br>
                    
                    EmployeeName:<input type="text" name="EmployeeName" value=${set.EmployeeName}><br>
                    basic Pay:   <input type="text" name="basicPay" value=${set.basicPay}><br>
                    
                    Net pay:<input type="text" id="net" name="net" value=${set.NetPay}><br>
                    <button class="button button2">DisplayDetail</button>
                    
        
                </div>
            </form>
        
        
        </body>
        </html>     
            `);
    console.log(set);}
    db.close();
      });
});
    });
}}).listen(3000);
console.log("form server listening on port 3000");