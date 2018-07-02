var products=require('./functionAmount');
var MongoClient=require('mongodb').MongoClient;
//var empdoc={empid:1006,empName:"ayushguha",department:"finance",salary:60000,location:'mumbai'}
MongoClient.connect('mongodb://127.0.0.1:27017/products',function (err,db)
{
if(err){
    console.log(err)
}

var resultSet=db.collection('products').find().toArray(function(err,result){
   
    if(err) throw err;
    console.log(result);
     for(var i=0;i<result.length;i++){
         var a=products.calculateAmount(result[i].Qty,result[i].Price);
         console.log("amount="+a);
         db.collection('products').updateOne({productID:result[i].productID},
             {$set:{amount:a}}, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
         })
     }
     db.close();
    });


});