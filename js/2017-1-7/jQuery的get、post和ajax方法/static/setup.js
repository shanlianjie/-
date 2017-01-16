
$(function(){
	
	$('button').click(function(){
		//$.ajaxSetup()可以用配置多个请求的通用属性和操作
		if($(this).data('request') == 'SETUP')
		{
			var options = {
				type:'GET',
				data:{name:'roy',age:28},
				success:function(response,statusText,xhr){
					
					alert(response.msg)
				},
				error:function(xhr,statusText,err){
					
					alert(err)
				},
				complete:function(){
					
					alert('请求结束了')
				}
				
			}
			
			//$.ajaxSetup()用来配置通用属性
			//$.ajaxSetup(options)
			
			//jQuery封装的ajax还支持链式语法
			$(document).ajaxStart(function(){
				
				alert('请求开始了')
				
			}).ajaxSuccess(function(){
				
				alert('请求成功了！！！！')
				
			}).ajaxError(function(){
				
				
			})
			
			
			//如果不覆盖通用的属性则只需在第二个参数传入一个空对象{}
			//$.ajax('/get',{})
			
			//如果要覆盖通用信息，则只需重置要覆盖的信息即可
			$.ajax('/post',{type:'POST',data:{name:'tom'}});
			
			
			
		}
	})
})
