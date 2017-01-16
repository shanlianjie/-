
const express = require('express'),
			
			fs = require('fs'),
	  
	  app = express()
	  
app.use(express.static('static'))

app.post('/loadTest',function(req,res){
	
	console.log('请求收到了')
	
	res.status(200).json({result:1,msg:'请求成功了'})
})

app.get('/jsonpTest',function(req,res){
	
	var callback = req.query.callback
	
	var data = {result:1,msg:'请求成功',data:{name:'roy',age:28}}
	
	var str = callback + '(' + JSON.stringify(data) + ')' 
	
	fs.appendFile('static/js/jsonp.js',str,function(err){
		if(err){
			res.status(404).send({result:0})
		}
		else{
			res.status(200).send(data)
		}
	})
	
})


app.listen(3000,function(){
	
	console.log('server running...')
})
