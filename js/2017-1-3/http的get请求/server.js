/*
 * npm install <pkg> --save 下载安装模块包，并把安装模块信息添加到package.json的依赖项
 * 
 * npm uninstall <pkg> --save 卸载模块包，并删除依赖项
 */
var express = require('express')

var app = express()

app.use(express.static('publish'))

//app.get()用来处理一个GET请求
//参数1:请求的url，这里的url是一个相对路径，相当于http://127.0.0.1:3000/login
//参数2：回调函数，用来处理请求的操作。回调函数有两个参数，参数1：处理请求的对象；参数2：处理响应的对象
app.get('/login',function(request,response){
	
	console.log('收到浏览器的请求了')
	//request.query获取get请求提交的数据。get请求的格式是直接把数据追加在url之后，所以query是获取url后边的数据
	console.log(request.query)
	console.log(request.query.userName)
	console.log(request.query.psw)
	
	//收到请求之后服务端需要作出响应，否则客户端会一直处于等待状态。一次请求只能响应一次。
	//response.send()发送响应信息
	//response.send('请求完成')
	
	//发送响应信息并设置状态码
	response.status(200).send('请求成功了')
})

app.listen(3000,function(){
	
	console.log('roy server running')
})




