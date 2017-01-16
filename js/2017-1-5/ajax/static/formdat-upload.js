document.forms[0].onsubmit = function(e){
	
	e.preventDefault()
	
	var data =new FormData(this)
	
	var xhr =new XMLHttpRequest()
	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4){
			
			alert(xhr.responseText)
			
		}
	}
	
	xhr.open('POST','/register')
	xhr.send(date)
}
