
function Control(){
	
	this.render()
	
	//this.layout()
	
}

Control.prototype.render = function(){
	
	this.ele = document.createElement('div')
	
	document.body.appendChild(this.ele)
}

Control.prototype.layout = function(){}

/*
 * 窗口发生变化时重新获取窗口的大小
 */
Control.prototype.resize = function(){
	
	//给control添加静态属性，用来在窗口发生变化的时候重新获取窗口的大小等属性
		Control.clientWidth = document.body.clientWidth

		Control.clientHeight = document.body.clientHeight

		//Math.min(a,b)取出a和b中最小的那一个
		//Control.radius记录窗口的最小半径
		Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2
}


//Control.prototype.resize()