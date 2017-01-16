//var 是声明变量；const 声明常量(ES6新增)
//const 常量的值一但声明就不可更改，所以一般声明常量的时候都要初始化。
//var a = 10 , b = 20
const express = require('express'),
			//使用post请求，请求数据放在请求体，所以需要使用body-parser模块对请求的数据进行解析
		bodyParser = require('body-parser'),

	    app = express()

app.use(express.static('static'))

//使用body-parser模块对请求的url进行编码
app.use(bodyParser.urlencoded({extended:true}))

//http://127.0.0.1:3000/register
//ES6标准可以这样使用箭头'=>'函数
app.post('/register',(req,res)=>{
	
	console.log(req.query)
	
	//post请求默认是把请求的数据存放在请求体，所以不能再使用request.query从查询字符串获取，而是要使用request.body从请求体获取请求提交的数据
	//另外使用node.js处理post请求需要安装node.js的body-parser模块(npm install body-parser --save)对请求体的数据进行解析，这样才能使用request.body获取到
	//还有一点：app.use(bodyParser.urlencoded({extended:true}))是对请求的url进行编码
	console.log(req.body)
	
	//res.send('请求成功')
	
	//动态页面：是由服务端生成并返回的页面，只需要在浏览器端加载。
	res.status(200).send("<html><head><meta charset='utf-8'><title>测试</title></head><body>小想嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻想</body></html>")
})

app.listen(3000,()=>{
	
	console.log('server is running...')
})
/*
 * GET请求和POST请求的区别：
 * get请求和post都是http协议常用的两种请求方式(不止这些还有PUT、DELETE...)
 * 1,get请求主要是向服务器获取数据或是页面，而post主要是往服务端提交数据或是修改数据。
 * 2,GET请求是把请求数据追加在url之后并且使用&连接，而post请求是把请求的数据放在请求体中发送给服务器。
 * 3,get请求适合发送少量的数据(一般不大于1024byte,不同的浏览器限制不一样)，而post可以发送大量的数据。
 * 4,get请求从安全性上来讲会比post更弱一些，因为get请求把请求数据以明文的方式追加在url之后，从地址栏中直接可以看到发送的数据。
 */

