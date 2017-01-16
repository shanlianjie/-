
window.onload = function(){
	
	getAllMsg()
}
/*
 * 提交留言
 */
document.forms[0].onsubmit = function(e){
	
	e.preventDefault()
	
	var data = new FormData(this)
	
	var xhr = new XMLHttpRequest()
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4){
			
			console.log(xhr.responseText)
			
			//获取到的是服务端返回的json字符串
			alert(typeof xhr.responseText)//String 
			
			//JSON.parse()把json格式数据转化为js对象
			var responseData =  JSON.parse(xhr.responseText)
			
			//alert(typeof responseData)
			
			//console.log(responseData)
			
			//alert(responseData.msg)
			
			if(responseData.result == 1){
				
				alert('发送留言成功!')
				//alert(responseData.msg)
				//获取留言并展示
				getAllMsg()
			}
			else{
				
				alert('留言失败,请稍后重试!')
			}
		}
	}
	
	xhr.open('POST','/user/sendMsg')
	
	xhr.send(data)
}

/*
 * 获取留言
 */
function getAllMsg(){
	
	var xhr = new XMLHttpRequest()
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4){
			
			console.log(xhr.responseText)
			
			var responseData = JSON.parse(xhr.responseText)
			
			console.log(responseData)
			
			if(responseData.result == 1){
						
				var allMsg = JSON.parse(responseData.content)
				
				var str = ''
				
				for(var i = 0;i < allMsg.length;i++){
					
					var aMsg = allMsg[i]
					
					str = str + '<section>'+ aMsg.content + '</section>'
						
				}
				
				document.querySelector('.content').innerHTML = str
			}
			else{
				
				alert('获取留言失败,请稍后重试!')
			}
			
			
			
		}
	}
	
	xhr.open('GET','/user/getAllMsg')
	
	xhr.send()
}












