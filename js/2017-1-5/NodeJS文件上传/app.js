
var express = require('express'),

	//multiparty也是node提供的一个处理上传的文件数据的一个模块.(npm install multiparty --save)
	multiParty = require('multiparty'),

	app = express(),
	
	//使用multiParty模块获取提交的form表单对象，并初始化上传的文件路径
	form = new multiParty.Form({uploadDir:'static/upload/files/'})
	
app.use(express.static('static'))

/*
 * 处理上传文件的请求
 */
app.post('/uploadFile',function(req,res){
	//使用parse()方法解析表单内提交的数据
	//参数1：获取的请求对象
	//参数2：回调函数，返回解析后的结果：该结果有三个值：1,错误信息；2,解析完的除了文件数据以外的文本数据；3,解析完的文件数据.
	form.parse(req,function(err,textData,files){
		//获取提交的文本数据，比如输入框输入的文本
		console.log(textData)
		
		//获取文件数据(即文件选择框的数据)
		console.log(files)
		
	})
	
	res.status(200).send('上传完成')
})

app.listen(3000,function(){
	
	console.log('server running...')
})
	
	
