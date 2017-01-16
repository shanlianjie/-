
function getRequest(){
	
	//alert('xxxx')
	/*
	 * ajax 最核心的就是XMLHTTPRequest对象。
	 * ajax使用该对象发起请求和获取响应数据。
	 */
	//构建xhr对象
	var xhr =  new XMLHttpRequest()
	
	//onreadystatechange事件是当发起ajax请求的时候用来捕获请求的状态，即发起请求之后请求的状态会不断被修改，每次状态被修改都会触发该事件。
	/*
	 * 发起一个ajax请求，请求的状态会经历5个阶段，这5个阶段对应的状态码：
	 * 0：请求尚未配置，即尚未调用open()方法。
	 * 1：请求已经配置完成，尚未发送send().
	 * 2:请求已经发送，服务端正在处理，一般在此状态下只能获取到部分响应头信息。
	 * 3：服务端正在处理响应信息，响应信息尚未完全完成。
	 * 4：服务端结束响应。此时请求结束，可以获取所有响应数据。
	 */
	xhr.onreadystatechange = function(){
		
		console.log('xxxxxxxxx')
		
		//xhr.readyState是用来获取当前的状态码
		switch (xhr.readyState){
			case 0:{
				
				console.log('请求尚未配置完成')
			}
			break;
			case 1:{
				
				console.log('请求尚未发送')
			}
			break;
			case 2:{
				
				console.log('请求已经发送')
			}
			break;
			case 3:{
				
				console.log('服务端正在处理请求')
			}
			break;
			case 4:{
				
				console.log('服务端响应结束')
				
				//xhr.responseText获取服务端的响应信息
				console.log(xhr.responseText)
				alert(xhr.responseText)
				
				//xhr.status获取服务端的响应码
				alert(xhr.status)
				
				//xhr.statusText获取状态码对应的描述信息
				alert(xhr.statusText)
				
				//xhr.getResponseHeader()获取指定的响应头
				console.log(xhr.getResponseHeader('Content-Type'))
				
				//xhr.getAllResponseHeaders()获取所有的响应头信息
				console.log(xhr.getAllResponseHeaders())
			}
			break;
			default:
				break;
		}
	}
	
	//使用open()方法配置该请求
	//参数1：请求方式
	//参数2：请求的url
	//参数3：是否发送异步请求。默认是true。该参数可省。
	xhr.open('GET','/login?userName=roy&psw=123456')
	
	//send()发送请求
	xhr.send()
	
	
}
