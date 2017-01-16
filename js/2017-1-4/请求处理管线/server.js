
var express = require('express'),

app = express()
/*
 * 请求处理管线是指当请求开始后到请求结束之前执行的一些列操作。这些操作会按照添加先后顺序一一执行。
 */
function utf8(req,res,next){
	
	//response.set()用来设置响应头
	res.set({'Content-Type':'text/html;charset=utf-8'})
	
	next()
	
}

function test1(req,res,next){
	
	console.log('请求处理管线中的第一个操作')
	
	//res.write往页面打印(输出)内容
	res.write('请求处理管线中的第一个操作')
	res.write('<br/>')
	
	//执行请求处理管线中的下一个操作
	next()
}

function test2(req,res,next){
	
	console.log('请求处理管线中的第2个操作')
	res.write('请求处理管线中的第2个操作')
	res.write('<br/>')
	next()
}

function test3(req,res){
	
	console.log('请求处理管线中的第4个操作')
	res.write('请求处理管线中的第4个操作')
	res.write('<br/>')
	res.end()
}

/*
 * '/'代表访问该服务器主机时调用的url
 * 
 * 往请求处理管线中添加一个操作
 */

app.get('/',utf8,test1,test2,function(req,res,next){
	
	//test1()
	//code...
	console.log('受到请求了')
	
	//res.send('请求完成了')
	
	res.write('请求完成了')
	res.write('<br/>')
	
	//结束响应
	//res.end()
	
	//response.send()相当于response.end() + response.write()
	//response.end()用来结束响应
	//response.write()用来返回响应信息
	//response.send()就是结束响应同时返回响应信息
	
	next()
	
},test3)

app.listen(3000,function(){
	
	console.log('server is running...')
})
