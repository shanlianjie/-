window.onload = function() {

	getAllMsg()
}

//提交数据
document.forms[0].onsubmit = function(e) {

		e.preventDefault()
		
		//serialize()  把表单内容解析
		var data =  $(this).serialize()
		console.log(data)
		$.post('/user/sendMsg',data, function(response, statusText, xhr) {
			if(xhr.readyState == 4){
				var responseData =  JSON.parse(xhr.responseText)
				
				
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

		})
	}
	//请求数据

function getAllMsg() {
	$.get('/user/getAllMsg', {}, function(response, statusText, xhr) {
			if(xhr.readyState == 4){
				var responseData = JSON.parse(xhr.responseText)
				
				if(responseData.result == 1){
					
					var allMsg = JSON.parse(responseData.content)
				
				var str = ''
				
				for(var i = 0;i < allMsg.length;i++){
					
					var aMsg = allMsg[i]
					
					//方式一：拼接html代码
					//但是这种方式要注意防止跨站脚本攻击XSS.
					//Cross Site Scripting 为了防止和css层叠样式表重名所起名为XSS。
					//跨站脚本的其中一种表现形式就是往程序中插入恶意脚本代码。
					var msg = aMsg.content
					
					
					
					str = str + '<section>'+ msg + '</section><span>'+aMsg.sendDate +'&#x3000;&#x3000;' + '</span><span>'+ aMsg.ip + '</span>'
					
							
				}
				}
				
				var html = template('myTemplate',{content:allMsg})
				
				document.querySelector('.content').innerHTML = html
				
				
				
			}

			})

	}