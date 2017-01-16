
var express = require('express'),

    app = express()
    
app.use(express.static('static'))

app.get('/login',function(req,res){
	
	res.status(200).send('登录成功')
})

app.listen(3000,function(){
	
	console.log('server is running...')
})
