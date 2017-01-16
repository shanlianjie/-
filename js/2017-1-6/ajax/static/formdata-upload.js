
document.forms[0].onsubmit = function(e){
	
	//阻止表单的默认提交事件
	e.preventDefault()
	
	//new FormData(this)作用是把form表单内的数据序列化到FormData内
	//这里的this就是form表单
	var data = new FormData(this)
	
	data.append('userName','roy')
	
	var xhr = new XMLHttpRequest()
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4){
			
			alert(xhr.responseText)
		}
	}
	
	xhr.open('POST','/register')
	
	xhr.send(data)
}
