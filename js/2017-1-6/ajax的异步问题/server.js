
const express = require('express'),
	  
	  app = express()

app.use(express.static('static'))

app.get('/test',(req,res)=>{
	
	setTimeout(function(){
		
		res.status(200).send('请求完成')
		
	},3000)
	
	
})

app.listen(3000,()=>{
	
	console.log('server running...')
})



