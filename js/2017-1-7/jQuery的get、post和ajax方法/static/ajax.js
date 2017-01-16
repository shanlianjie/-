$(function() {

	$('button').click(function() {

		if($(this).data('request') == 'AJAX') {

			//加载层-默认风格
			layer.load();
			//tips层-左
			layer.tips('您点击了这个按钮', '#ajax', {
				tips: [2, '#112233']
			});

			//$.ajax()是jQuery提供的一个更加基础的ajax请求方法，在该方法内部可以配置更多的信息。
			$.ajax('/post', {
				//type/method:设置请求方式
				type: 'POST',

				//data设置请求数据
				data: {
					name: 'tom',
					psw: 123456
				},
				
				//期望服务端返回的数据类型。该属性会影响请求头的Accept请求头的值。值的类型有：xml/html/scripts/text/json
				dataType:'json',
				
				//设置编码方式。默认值是'application/x-www-form-urlencoded'.
				contentType:'application/x-www-form-urlencoded',
				
				//cache是否对数据进行缓存
				cache:true,
				
				//是否发起异步请求
				async:true,
				
				//beforeSend发送请求之前调用的方法。可以在这里设置请求头
				beforeSend:function(){
					
					alert('xxxxx')
				},
				
				//dataFilter对数据进行过滤。假如服务器返回的数据格式不是期望的类型可以使用该方法对数据进行格式化，格式化为期望的类型。
				//参数1：返回的数据
				//参数2：浏览器期望的数据格式(即dataType的属性值)
				dataFilter:function(data,type){
					
					alert(type)
					
					if(type == 'json'){
						
						//转化为json数据
						return JSON.stringify({msg:data})
					}
					else{
						return data
					}
					
				},
		
				//success设置请求成功的回调
				success: function(response, statusText, xhr) {

					alert('>>>>' + response.msg)

					//alert(statusText)

					//alert(xhr.responseText)
				},

				//error配置请求失败的回调
				//参数1:xhr:对象
				//参数2：状态描述信息
				//参数3：错误信息描述
				error: function(xhr, statusText, err) {

					//alert(xhr.status)

					//alert(statusText)

					alert(err)

				},
				//complete请求完成的回调。无论成功失败都会调用。
				complete: function() {
					//此处演示关闭
					setTimeout(function() {
						layer.closeAll('loading');
					}, 2000);
					//alert('请求完成了')
				},
				
				//timeout设置请求超时时间
				timeout:2 * 1000
			})
		}
	})
})