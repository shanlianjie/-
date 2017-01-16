const express = require('express'),
	  
	  bodyParser = require('body-parser'),
	  
	  multer = require('multer'),
	  
	  upload = multer({dest:'static/upload/'})
	  
	  app = express(),
	  
	  

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended:true}))

app.get('/login',(req,res)=>{
	
	res.status(200).send('请求完成')
})


app.post('/register',upload.array('avatar'),(req,res)=>{
	
	console.log('请求收到了')
	
	console.log(req.body)
	
	console.log(req.files)
	
	//获取所有的请求头
	console.log(req.headers)
	
	res.set({'x-roy-test2':'hi'})
	
	res.status(200).send('请求结束')
})

app.listen(3000,()=>{
	
	console.log('server running...')
})
