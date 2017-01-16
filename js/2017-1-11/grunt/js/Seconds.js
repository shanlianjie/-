function Seconds(){
	
	Control.call(this)
}

Seconds.prototype = Object.create(Control.prototype)

Seconds.prototype.constructor = Seconds

/*
 * 计算创建秒针时的数据
 */
Seconds.prototype.calcRenderData = function(){
	
	//获取当前日期
	var date = new Date()
	
	//获取当前秒数
	var currentSeconds = date.getSeconds()
	
	currentSeconds *= -1
	
	var renderData = {}
	
	renderData.delay = currentSeconds - 15
	
	renderData.duration = 60
	
	renderData.color = 'orange'
	
	return renderData
	
	
}
/*
 * 创建秒针，并设置秒针动画所需数据
 */
Seconds.prototype.render = function(){
	
	Control.prototype.render.call(this)
	
	//获取创建秒针时需要的数据
	var data =  this.calcRenderData()
	
	this.ele.style.background = 'linear-gradient(to right,' + data.color + ' 50%,rgba(0,0,0,0) 50%)'
	
	this.ele.style.animationName = 'myRotate'
	
	this.ele.style.animationTimingFunction = 'linear'
	
	this.ele.style.animationDuration = data.duration + 's'
	
	this.ele.style.animationDelay = data.delay + 's'
	
	this.ele.style.animationIterationCount = 'infinite'
	
}

/*
 * 计算秒针布局需要的数据
 */
Seconds.prototype.calcLayoutData = function(){
	
	var layoutData = {}
	
	layoutData.radiusSize = Control.radius * 0.85
	
	layoutData.width = layoutData.radiusSize * 2 
	
	layoutData.height = layoutData.radiusSize * 0.01
	
	return layoutData
}

/*
 * 布局秒针
 */
Seconds.prototype.layout = function(){
	
	//获取秒针布局的数据
	var data = this.calcLayoutData()
	
	this.ele.style.width = data.width + 'px'
	
	this.ele.style.height = data.height + 'px'
	
	this.ele.style.position = 'absolute'
	
	var w = Control.clientWidth 
	
	var h = Control.clientHeight
	
	this.ele.style.left = w / 2 - data.radiusSize + 'px' 
	
	this.ele.style.top =  h / 2 - data.height/2 + 'px' 
	
	
}
