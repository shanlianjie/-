
/*
 * ajax提供了一个FormData对象用来模拟form表单格式的数据,该格式的数据默认可以认为编码方式为multiparty/form-data格式，所以需要服务端使用multer模块来解析该格式数据。
 */
function formdataRequest(){
	
	var xhr = new XMLHttpRequest()
	
	//构架formdata对象
	var data = new FormData()
	
	//往formdata中追加数据
	//参数1：提交的参数名
	//参数2：提交的参数值
	data.append('userName','jobs')
	
	data.append('psw',123456)
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4){
			
			alert(xhr.responseText)
		}
	}
	
	xhr.open('POST','/register')
	
	//把formdata数据提交给服务器
	xhr.send(data)
	
}
