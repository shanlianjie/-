
var express =  require('express')

var app = express()

app.use(express.static('static'))

app.get('/register',function(req,res){
	
	console.log('服务端受到请求了')
	
	var userName = req.query.userName
	
	var psw = req.query.psw
	
	var confirmPsw = req.query.confirmPsw
	
	//判断两次输入的密码是否一致(一般来判断不会放在服务端执行，一般都在浏览器端判断，如果不一致则不发起请求，这样减少服务端的压力)
	if(psw !== confirmPsw){
		
		res.status(404).send('两次输入的密码不一致!')
	}
	else{
		
		res.status(200).send('注册成功！')
	}
})

app.listen(3000,function(){
	
	console.log('server running。。。')
})
