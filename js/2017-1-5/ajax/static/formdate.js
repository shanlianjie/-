function formdate(){
	var xhr = new XMLHttpRequest()
	
	var date = new FormData()
	
	date.append('userName','jobs')
	
	date.append('psw',123456)
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			
			alert(xhr.responseText)
			
		}
		
		
	}
	xhr.open('POST','/register')
	
	//把表单formdate数据提交给服务器
	xhr.send(date)
}
