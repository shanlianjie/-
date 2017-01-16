
/*
 * 构造秒针的构造函数
 */
function Seconds(){
	
	Control.call(this)
}

Seconds.prototype = Object.create(Control.prototype)

Seconds.prototype.constructor = Seconds

/*
 * 添加renderData方法，设置动画的相关数据
 */
Seconds.prototype.renderData = function(){
	
	var date = new Date()
	
	var currentSeconds = date.getSeconds() * -1 - 15 ;
	var renderData = {
		delay:currentSeconds,
		duration:'60s'
		
	}
	
	return renderData
}

/*
 * 重写render
 */
Seconds.prototype.render = function(){
	
	Control.prototype.render.call(this)
	
	//获取动画相关数据
	var renderData = this.renderData()
	
	this.ele.style.animationName = 'rotate';
	
	this.ele.style.animationDuration = renderData.duration;
	
	this.ele.style.animationTimingFunction = 'linear';
	
	this.ele.style.animationIterationCount = 'infinite';

	this.ele.style.animationDelay = renderData.delay + 's';
	
}

/*
 * 添加layoutData方法为指针设置样式数据
 */
Seconds.prototype.layoutData = function(){
	
	var layoutData = {
		
		color:'red',
		width:Control.radius * 2 * 0.75,
		height:Control.radius*0.01,
		left:Control.clientWidth/2 - Control.radius * 0.75,
		top:Control.clientHeight/2 - Control.radius*0.01 / 2,
			
	}
	
	return layoutData
}
/*
 * 重写layout方法
 */
Seconds.prototype.layout = function(){
	
	//获取样式数据
	var layoutData = this.layoutData()

	this.ele.style.width = layoutData.width  + 'px';
	
	this.ele.style.height = layoutData.height + 'px';
	
	this.ele.style.position = 'absolute';
	
	this.ele.style.left = layoutData.left + 'px';
	
	this.ele.style.top = layoutData.top + 'px';
	
	//this.ele.style.backgroundColor = 'red';
	
	this.ele.style.background = 'linear-Gradient(to right,' + layoutData.color + ' 55%,rgba(0,0,0,0) 45%)';
	
	
}

