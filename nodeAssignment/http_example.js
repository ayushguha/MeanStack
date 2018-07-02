var http=require('http');
var server=http.createServer(function(request, response){
    console.log('request starting...')
     //respond
    if(request.url=="/ayush")
    {
        response.write('hey ayush');
        response.end();
    }
    else{
    response.write('hey user!');
   }
    response.end();

});
server.listen(3000);
console.log('server running at http://172.29.120.45:3000/');
//server.listen(8000);
//console.log('server running at http:/172.29.120./');