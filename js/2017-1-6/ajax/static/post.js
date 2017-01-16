
function sendPostRequest(){
	
	var xhr = new XMLHttpRequest()
	
	xhr.onreadystatechange = function(){
		
		//xhr.readyState == 4代表请求结束，开始处理响应数据
		if(xhr.readyState == 4){
			
			alert(xhr.responseText)
		}
	}
	
	xhr.open('POST','/register')
	
	//ajax请求在提交post请求的时候需要对url进行编码，所以要设置请求头信息，并且要在open()方法之后
	
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	
	//自定义头信息
	xhr.setRequestHeader('X-Roy-Test','hello')
	
	//post请求是把请求数据放在请求体提交给服务器，所以不能像get请求那样在URL之后。
	xhr.send('userName=jobs&psw=123456')
}
