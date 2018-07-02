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
                 
                   
                   
                   
                   New Amount<input type="text" id="amount" name="amount"/><br>
                   
                 
                   
                   <button class="button button2">UpdateDetail</button>
                   
       
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
    
  var amount=obj1.amount;
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Employee");
      var amount1=parseFloat(amount);
      var updateval={$inc:{basicPay:amount1 }}
     
       var set= dbo.collection("emp").update({},updateval,{multi:true},function(err,set){
        if (err)
        {
            throw err;
        }
        else{
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
            <label>BasicPay Updated for All!</label><br>
            </form></body></html>`);
    console.log(set);}
    db.close();
      });
});
    });
}}).listen(3000);
console.log("form server listening on port 3000");