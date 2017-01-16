/*
 * jQuery对ajax请求进行了封装，可以快速的发送get、post等请求。并且对这些请求都有统一的格式，无需关注请求数据存放的位置。
 */
$(document).ready(function(){
	
	$('button').click(function(){
		
		if($(this).data('request') == 'GET'){
			
			//alert('sssss')
		//$.get()用来发送一个get请求
		//参数1：url。(required必填)
		//参数2：请求数据。(optional可选)
		//参数3：回调函数。(optional可选)该回调函数有几个参数：1：响应数据；2：jQuery封装的状态描述(success,error)；3，xhr对象
		$.get('/get',{name:'roy',age:28},function(response,statusText,xhr){
			
			//response是服务端的返回数据，需要注意的是该数据是经过jQuery处理的数据，假如返回数据是json格式则无需解析，获得的就是解析后的js对象
			alert(response.msg)
			
			//statusText是jQuery封装的状态码信息。其中success代表成功。
			alert(statusText)
			
			//xhr对象。可以获取更加原始的信息。比如响应头信息。
			alert(xhr.responseText)
		})
		}
		
	})
})
