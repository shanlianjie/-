
var express = require('express'),
	
	bodyParser = require('body-parser')
	
	app = express()
	
	multer = require('multer')
	
	upload = multer({dest:'static/upload/files/'})

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended:true}))
app.get('/login',(req,res)=>{
	
	console.log('服务端接收到请求了')
	
	console.log(req.query)
	
	res.status(200).send('登录成功!!!!!')
})
app.post('/register',upload.array(),(req,res)=>{
	
	console.log('服务端接收到请求了')
	
	console.log(req.query)
	
	res.status(200).send('请求结束')
})

app.listen(3000,()=>{
	
	console.log('server running...')
})


