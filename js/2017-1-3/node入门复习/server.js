/*
 * Node.JS使用某一个模块的步骤：
 * 1,npm install <package> --save
 * 2,require('<package>')
 */
var express =  require('express')

//使用express构建服务器端应用/网站
var app = express()

//设置静态目录
//静态目录就是服务器(网站)的服务目录，只有放在该目录下的文件才能通过该服务被访问和操作。位于该目录下的文件我们称为静态文件。静态文件不需要服务端参与处理，是事先创建好放在静态目录下的文件(比如html、css、js、图片文件等)。
app.use(express.static('static'))

//监听/分配服务端口
app.listen(3000,function(){
	
	console.log('server is running...')
})

//使用node server.js 启动服务器





