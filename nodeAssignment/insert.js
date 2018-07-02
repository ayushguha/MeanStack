var MongoClient=require('mongodb').MongoClient;
var empdoc={empid:1006,empName:"ayushguha",department:"finance",salary:60000,location:'mumbai'}
MongoClient.connect('mongodb://127.0.0.1:27017/emp',function (err,db)
{
if(err){
    console.log(err)
}

var resultSet=db.collection('emp').find().insert(empdoc,function(err,result){
    if(err) throw err;
    
        console.log("document inserted successfully");
    });

db.close();
});