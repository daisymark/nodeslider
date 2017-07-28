/*
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）

Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。

*/
//管道流
//管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
//读取流
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('../data/data.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("读取程序执行完毕");

//写入流

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('../data/output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("写入程序执行完毕");



/*
链式流
链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
接下来我们就是用管道和链式来压缩和解压文件。
*/
var zlib = require('zlib');
// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('../data/data.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../data/data.txt.gz'));
  
console.log("文件压缩完成。");

// 解压 input.txt.gz 文件为 input.txt
var gzip = zlib.createGzip();
var inp = fs.createReadStream('../data/data.txt.gz');
var out = fs.createWriteStream('../data/output.txt');

inp.pipe(gzip).pipe(out);

console.log("文件解压完成。");








