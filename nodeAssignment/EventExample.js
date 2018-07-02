var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('sayHI',function(){
    console.log('hiii......');
});

eventEmitter.on('sayHello',function(){
    console.log('hello..');
});

console.log("before sayHI");
eventEmitter.emit('sayHI');
console.log("after sayHI");
console.log("before sayHello");
eventEmitter.emit('sayHello');
console.log("after sayHello");