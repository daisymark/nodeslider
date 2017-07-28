/*
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。
因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
*/

var buf1 = new Buffer(10);//创建长度为 10 字节的 Buffer 实例
var buf2 = new Buffer([10, 20, 30, 40, 50]);//通过给定的数组创建 Buffer 实例
var buf3 = new Buffer("www.runoob.com", "utf-8");//通过一个字符串来创建 Buffer 实例

//写入缓存
/*
buf.write(string[, offset[, length]][, encoding])
string - 写入缓冲区的字符串。
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length
encoding - 使用的编码。默认为 'utf8' 。
*/

var buf4 = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);


//从缓冲区读取数据
/*
buf.toString([encoding[, start[, end]]])
encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾。
*/
var buf5 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

var buf6 = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);// Node Buffer 转换为 JSON 对象

console.log(json);
//Node 缓冲区合并
/*
Buffer.concat(list[, totalLength])
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
*/

var buffer1 = new Buffer('henhao ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


//缓冲区比较
/*
buf.compare(otherBuffer);
otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
*/
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
//拷贝缓冲区
/*
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
*/

var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//缓冲区裁剪
/*
buf.slice([start[, end]])
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
*/
var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
//缓冲区长度
var buffer = new Buffer('www.runoob.com');

console.log("buffer length: " + buffer.length); //缓冲区长度




