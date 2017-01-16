
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
				
				//取出留言数组
				var allMsg = JSON.parse(responseData.content)
				
				var str = ''
				
				for(var i = 0;i < allMsg.length;i++){
					
					var aMsg = allMsg[i]
					
					//方式一：拼接html代码
					//但是这种方式要注意防止跨站脚本攻击XSS.
					//Cross Site Scripting 为了防止和css层叠样式表重名所起名为XSS。
					//跨站脚本的其中一种表现形式就是往程序中插入恶意脚本代码。
					var msg = aMsg.content.replace(/</g,'&lt;')
					
					msg = msg.replace(/>/g,'&gt;')
					
					str = str + '<section>'+ msg + '</section><span>'+aMsg.sendDate +'&#x3000;&#x3000;' + '</span><span>'+ aMsg.ip + '</span>'
					
							
				}
				
				//document.querySelector('.content').innerHTML = str
				//方式二：artTemplate
					
				var html = template('myTemplate',{content:allMsg})
				
				document.querySelector('.content').innerHTML = html
			}
			else{
				
				alert('获取留言失败,请稍后重试!')
			}
			
			
			
		}
	}
	
	xhr.open('GET','/user/getAllMsg')
	
	xhr.send()
}












