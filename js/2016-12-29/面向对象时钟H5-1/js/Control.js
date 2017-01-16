var style = document.createElement('style')

document.head.appendChild(style)

var i = 0

style.sheet.insertRule('*{box-sizing:border-box;}', i++)

style.sheet.insertRule('html{height:100%;}', i++)

style.sheet.insertRule('body{height:100%;margin:0;}', i++)

style.sheet.insertRule('@keyframes myRotate{from{transform: rotate(0deg);}to{transform: rotate(360deg);}}',i++)

function Control(){
	
	this.render()
	
	this.layout()
}
/*
 * 构造各种对象对应的标签元素
 */
Control.prototype.render = function(){
	
	this.ele = document.createElement('div')
	
	document.body.appendChild(this.ele)
}

/*
 * 布局每一个对象的样式
 */
Control.prototype.layout = function(){}


/*
 * 监听窗口大小变化的操作
 */
Control.prototype.windowResize = function(){
	
	//获取窗口的宽高
	Control.clientWidth = document.body.clientWidth
	
	Control.clientHeight = document.body.clientHeight
	
	//Math.min(a,b)获取a和b的最小值
	Control.radius = Math.min(Control.clientWidth,Control.clientHeight) / 2
	
	console.log(Control.clientWidth + '|' + Control.clientHeight)
	
	console.log(Control.radius)
}

Control.prototype.windowResize()
