
const express = require('express'),

	  //multer模块是node提供的一个处理提交的文件数据的模块(npm install multer --save)
	  multer = require('multer'),
	  
	  //fs：file system 文件系统。它是node提供专门用来进行文件的读写操作功能模块。(npm install fs --save)
	  fs = require('fs'),
	  
	  //设置上传文件的保存路径。(这里是保存在一个叫做upload的文件夹目录内)
	  //dest:destination 用来设置目的路径
	  upload = multer({dest:'static/upload/})

	  app = express()
	  
app.use(express.static('static'))

/*
 * 处理/uploadFile上传文件的请求
 * 
 * upload.single()是添加到请求处理管线中的一个操作，用来在服务端结束响应之前对上传文件数据进行解析。
 * 
 * single()代表处理上传的单个文本
 */
app.post('/uploadFile',upload.single('avatar'),function(req,res){
	
	//获取上传数据的文本数据
	console.log(req.body)
	
	//获取请求提交的单个文件
	console.log(req.file)
	
	//res.send('上传成功')
	
	var file = req.file
	
	var originalPath = file.path
	
	//拼接目的路径upload/files/xxx.jpg
	var destPath = file.destination + file.originalname
	
	//fs.rename()使用fs模块提供一个对文件进行重命名的一个方法，同时会对文件进行格式化(比如重命名、修改路径)。
	//参数1：文件的原始路径
	//参数2：文件的目的路径
	//参数3：回调函数，该函数用来返回处理结果,如果操作失败会在函数参数为传递error对象，操作成error为空
	fs.rename(originalPath,destPath,function(error){
		
		if(error){
			
			console.log('操作失败')
			res.send('上传文件失败')
		}
		else{
			
			console.log('操作成功')
			res.send('上传成功！<img src="upload/files/'+ file.originalname +'" />')
		}
	})
	
})

/*
 * 处理上传多个文件
 * 
 * upload.array()处理上传的多个文件
 */
app.post('/uploadMultiFile',upload.array('avatar'),function(req,res){
	
	console.log('收到请求了')
	
	//request.files获取上传的多个文件
	console.log(req.files)
	
	//res.status(200).send('上传文件成功')
	
	var allFiles = req.files
	
	//记录上传的个数
	var count = 0
		
	for(var i = 0;i < allFiles.length;i++){
		
		var aFile = allFiles[i]
		
		var originalPath = aFile.path
		
		var destPath = aFile.destination + aFile.originalname

		fs.rename(originalPath,destPath,function(err){ 
			
			if(err){
				console.log('上传文件失败')
				res.status(400).send('上传文件失败')
				
			}
			else{
				console.log('上传文件成功')
				
				count++
				
				//假如记录的个数等于上传的个数，再结束响应
				if(count == allFiles.length){
					
						res.status(200).send('上传文件成功')
				}
			
			}
		})
	}
})


app.listen(3000,function(){
	
	console.log('server running...')
})

