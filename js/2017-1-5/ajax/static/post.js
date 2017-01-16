function sendPostRequest(){
	
	var xhr new XMLHttpRequest()
	
	xhr.onreadystatechange= function(){
		
		if(xhr.readyState == 4){
			
			alert(xhr.responseText)
		}
		
		
	}
	
	xhr.open('POST','/register')
	
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	
	xhr.setRequestHeader('x-Roy-Test','hello ')
	
	xhr.send('userName = jobs&psw=123456')
	
}
