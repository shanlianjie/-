
//需要用jquery对象去调用
$.fn.changeBgColor = function(color){
	//this 是一个jquery对象
	//console.dir(this)
	
	this.css("background-color",color)
	
}

//用$去调用
$.showMsg = function(msg){
	alert(msg)
}


