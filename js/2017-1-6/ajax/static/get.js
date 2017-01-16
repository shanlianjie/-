
function sendGetRequest(){
	
	var xhr = new XMLHttpRequest()
	
	xhr.onreadystatechange = function(){
		
		//请求过程中有5种状态的变化，一般只需要等最后一种状态触发即可
		if(xhr.readyState == 4){
			
			//xhr.responseText获取服务端的响应数据
			alert(xhr.responseText)
		}
	}
	
	
	xhr.open('GET','/login?userName=roy&psw=123456')
	
	xhr.send()
}




