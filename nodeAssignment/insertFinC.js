var MongoClient=require('mongodb').MongoClient;
var doc={farenheit:56}
MongoClient.connect('mongodb://127.0.0.1:27017/FtoT',function (err,db)
{
if(err){
    console.log(err)
}

var resultSet=db.collection('FtoC').insert(doc,function(err,result){
    if(err) throw err;
    
        console.log("document inserted successfully");
    });

db.close();
});