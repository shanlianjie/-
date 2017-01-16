const express = require('express'),

	  bodyParser = require('body-parser'),
	  
	  app = express()

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended:true}))

app.get('/get',(req,res)=>{
	
	console.log(req.query)
	//res.status(200).send({result:1,msg:'请求成功'})
	
	res.status(200).json({result:1,msg:'请求成功'})
})

app.post('/post',(req,res)=>{
	
	console.log(req.body)
	//res.status(200).send({result:1,msg:'请求成功'})
	
	setTimeout(function(){
		
		res.status(200).json({result:1,msg:'请求成功'})
		
	},3000)
	//res.status(200).json({result:1,msg:'请求成功'})
	
	//res.status(200).send('请求成功')
})

app.listen(3000,()=>{
	
	console.log('server is running...')
})
