
$(function(){
	
	$('button').click(function(){
		
		if($(this).data('request') == 'POST'){
			
			$.post('/post',{name:'jobs',psw:12345},function(response,statusText,xhr){
			
			alert(response.msg)
			})
		}
		
		
	})
})
