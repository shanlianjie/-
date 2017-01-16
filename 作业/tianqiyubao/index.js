

xianshi('芜湖')

document.forms[0].onsubmit = function(e){
	
	e.preventDefault()
	var area = $('#tj').val()
	
	xianshi(area)

}

function xianshi(can){
    	$.post('http://route.showapi.com/9-9?area='+can+'&showapi_appid=30523&showapi_sign=1cb39137a0654b5fabbfd3e59238fb46',{},function(response,statusText,xhr){

		console.log(response.showapi_res_body.dayList)
		var data ={
			
			content:response.showapi_res_body.dayList,
			
			city:response.showapi_res_body.area
		}
		
		var html = template('myTemplate', data)


	var Content =	document.querySelector('.content')
		
		
		Content.innerHTML = html  

	})
	}


