
var express  = require('express')

var app = express()

app.use(express.static('static'))

app.get('/login',function(req,res){
	
	var name = req.query.name
	
	var psw = req.query.psw
	
	console.log(name)
	
	console.log(psw)
	//假设用户名为roy，密码为123456
	if(name === 'roy'){
		
		if(psw == 123456){
			
			res.status(200).send('登录成功')
		}
		else{
			
			res.status(404).send('密码错误！')
		}
		
	}
	else{
		
		res.status(404).send('用户名错误')
	}
	
	
})

app.listen(3000,function(){
	
	console.log('server running...')
})
