var rectangle=require('./rectangleb1');
var MongoClient=require('mongodb').MongoClient;
//var empdoc={empid:1006,empName:"ayushguha",department:"finance",salary:60000,location:'mumbai'}
MongoClient.connect('mongodb://127.0.0.1:27017/rectangle',function (err,db)
{
if(err){
    console.log(err)
}

var resultSet=db.collection('rectangle').find().toArray(function(err,result){
    if(err) throw err;
    console.log(result);
     for(var i=0;i<result.length;i++){
         console.log("area="+rectangle.calculateArea(result[i].length,result[i].breadth))
     }
    });

db.close();
});