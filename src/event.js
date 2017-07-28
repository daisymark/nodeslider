//Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
//当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序event执行完毕。");


var fs = require("fs");

fs.readFile('../data/data.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序fs执行完毕");

//运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。
//其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。
eventEmitter.on('some_event', function() { //event 对象注册了事件 some_event 的一个监听器
	console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
	eventEmitter.emit('some_event'); //向 event 对象发送事件 some_event
}, 1000);

//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
//当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。


/************************************************************************************************************************
*********/
// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

/**********************************************************************/
//addListener(event, listener)
//为指定事件添加一个监听器到监听器数组的尾部。
/**********************************************************************/

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

/**********************************************************************/
//on(event, listener)
//为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
/**********************************************************************/

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");


/**********************************************************************/
//listenerCount(emitter, event)
//返回指定事件的监听器数量。
// 处理 connection 事件 
/**********************************************************************/


eventEmitter.emit('connection');

/**********************************************************************/
//emit(event, [arg1], [arg2], [...])
//按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
/**********************************************************************/

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

/**********************************************************************/
//removeListener
//event - 字符串，事件名称
//listener - 处理事件函数
//从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
/**********************************************************************/


// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序em执行完毕。");




