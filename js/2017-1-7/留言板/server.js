
const express = require('express'),

	  bodyParser = require('body-parser'),
	  
	  multer = require('multer'),
	  
	  fs = require('fs'),
	  
	  upload = multer()
	  
	  app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('static'))

/*
 * 处理用户发送的留言接口
 */
app.post('/user/sendMsg',upload.array(),(req,res)=>{
	
	//console.log(req.body)
	
	//console.log(req.body.content)
	
	//request.ip获取发送请求的ip地址
	
	var msg = {
		content:req.body.content,
		sendDate:new Date(),
		ip:req.ip
	}
	
	//保存留言信息
	//fs.exist()判断某一个目录是否存在
	//参数1：目录路径
	//参数2：回调函数，该回调返回Boolean变量记录是否存在
	fs.exists('static/content',(isExist)=>{
		
		if(!isExist){
			
			//创建该目录
			//fs.mkdirSync()创建文件夹(同步操作)
			//Asynchronize异步
			//Synchronize同步
			fs.mkdirSync('static/content')
		}
		
		//把留言保存在该目录下
		//fs.appendFile()往某一个文件内追加数据，并会自动创建该文件
		//参数1：文件路径。
		//参数2：保存的数据。
		//参数3：回调函数。该回调函数返回error信息。
		//JSON.stringify()把一个js对象转化为json字符串
		
		fs.appendFile('static/content/msg.txt',JSON.stringify(msg) + ',',(err)=>{
			
			if(err){
				//保存失败
				res.status(500).send({result:0,msg:'留言失败!'})
			}
			else{
				//保存成功
				res.status(200).send({result:1,msg:'留言成功!'})
			}
		})
		
	})
	
	
})

/*
 * 获取所有留言
 */
app.get('/user/getAllMsg',(req,res)=>{
	
	//fs.readFile()读取某一个文件
	//参数1：文件地址
	//参数2：回调函数。该回调函数返回error信息和读取到的数据
	fs.readFile('static/content/msg.txt',(err,data)=>{
		
		if(err){
			
			res.status(404).send({result:0,msg:'获取留言失败'})
		}
		else{
			
			console.log(JSON.stringify(data))
			
			 data = '[' + data
			 
			 data = data.substr(0,data.length-1)
			 
			 data = data + ']'
			
			res.status(200).send({result:1,msg:'获取留言成功',content:data})
		}
	})
})
app.listen(3000,()=>{
	
	console.log('server running...')
})



