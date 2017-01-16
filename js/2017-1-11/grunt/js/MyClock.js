/*
Powered By 智游教育
*/var style = document.createElement('style')

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



function Clock() {

	//创建中心点
	var centerPoint = new CenterPoint()
	
	//创建秒针
	var seconds = new Seconds()
	
	//创建分针
	var minutes = new Minutes()
	
	//创建时针
	var hours = new Hours()
	
	var allCirclePoint = []
	//创建60个刻度
	for(var i = 0 ;i < 60;i++){
		
		var circlePoint =  new CirclePoint(i)
		
		allCirclePoint.push(circlePoint)
	}
	
	//监听浏览器窗口大小变化的事件
	window.onresize = function() {

		//alert('xxxxxx')
		//new Control().windowResize()
		//重新获取窗口的宽高等信息
		Control.prototype.windowResize()
		
		//重新布局中心点
		centerPoint.layout()
		
		//重新布局秒针
		seconds.layout()
		
		//重新布局分针
		minutes.layout()
		
		//重新布局时针
		hours.layout()
		
		//重新布局所有的刻度
		for(var index in allCirclePoint){
			
			var aPoint = allCirclePoint[index]
			
			aPoint.layout()
		}
	}
}
function CenterPoint(){
	
	Control.call(this)
}
/*
 * 设置原型链继承
 */
CenterPoint.prototype = Object.create(Control.prototype)

CenterPoint.prototype.constructor = CenterPoint
/*
 * 重写父对象control的render方法创建中心点
 
CenterPoint.prototype.render = function(){
	
	Control.prototype.render.call(this)
	
}
*/

/*
 * 设置中心点的样式
 */
CenterPoint.prototype.layout = function(){
	
	var w = Control.radius * 0.05 
	
	this.ele.style.zIndex = '10'
	
	this.ele.style.width = w + 'px'
	
	this.ele.style.height = w + 'px'
	
	this.ele.style.position = 'absolute'
	
	this.ele.style.left = (Control.clientWidth - w) / 2 + 'px'
	
	this.ele.style.top = (Control.clientHeight - w) / 2 + 'px'
	
	this.ele.style.backgroundColor = 'black'
	
	this.ele.style.borderRadius = '50%'
}

function CirclePoint(minutes){
	
	this.minute = minutes
	//获取每一分钟对应的弧度
	this.arc = (minutes - 15) * 6 * Math.PI / 180
	
	console.log(this.arc)

	Control.call(this)
}
/*
 * 设置原型链继承
 */
CirclePoint.prototype = Object.create(Control.prototype)

CirclePoint.prototype.constructor = CirclePoint

/*
 * 构建刻度
 
CirclePoint.prototype.render = function(){
	
	this.ele = document.createElement('div')
	
	document.body.appendChild(this.ele)
}
*/


CirclePoint.prototype.layout = function(){
	
	var w = this.minute % 5 == 0 ? Control.radius * 0.03 : Control.radius * 0.02
	
	var radiusSize = Control.radius * 0.9
	
	this.ele.style.width = w + 'px'
	
	this.ele.style.height = w + 'px'
	
	this.ele.style.borderRadius = '50%'
	
	this.ele.style.backgroundColor = 'black'
	
	this.ele.style.position = 'absolute'
	
	this.ele.style.top = Control.clientHeight / 2 + 　 radiusSize * Math.sin(this.arc) - w/2 + 'px'
	
	this.ele.style.left = Control.clientWidth / 2 +　 radiusSize * Math.cos(this.arc) - w/2 + 'px'
	

	console.log(this.arc)
	
	
}

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

function Minutes(){
		
	Seconds.call(this)
	
	
}

Minutes.prototype = Object.create(Seconds.prototype)

Minutes.prototype.constructor = Minutes

/*
 * 重写calcRenderData方法，为分针的布局提供数据
 */
Minutes.prototype.calcRenderData = function(){
	
	var date = new Date()
	
	var currentMinutes = date.getMinutes()
	
	var currentSeconds = date.getSeconds() * -1
	
	currentMinutes *= -1
	
	currentMinutes = (currentMinutes - 15) * 60 + currentSeconds
	
	var renderData = {}
	
	renderData.delay = currentMinutes
	
	renderData.duration = 3600
	
	renderData.color = 'blue'
	
	return renderData
	
	
}

/*
 * 重写calcLayoutData方法，为分针的布局提供数据
 */
Minutes.prototype.calcLayoutData = function(){
	
	var layoutData = {}
	
	layoutData.radiusSize = Control.radius * 0.8
	
	layoutData.height = layoutData.radiusSize * 0.02
	
	layoutData.width = layoutData.radiusSize * 2
	
	return layoutData
}



function Hours(){
	
	Minutes.call(this)
}

Hours.prototype = Object.create(Minutes.prototype)

Hours.prototype.constructor = Hours

Hours.prototype.calcRenderData = function(){
	
	var date = new Date()
	
	var currentSeconds = date.getSeconds() * -1
	
	var currentMinutes = date.getMinutes() * -1
	
	var currentHours = date.getHours() 
	
	currentHours = currentHours > 12 ? currentHours -12 : currentHours
	
	currentHours *= -1
	
	var renderData = {}
	
	renderData.delay = (currentHours - 3) * 60 * 60 +currentMinutes * 60 + currentSeconds
	
	renderData.duration = 12 * 60 * 60
	
	renderData.color = 'red'
	
	return renderData
	
	
}

Hours.prototype.calcLayoutData = function(){
	
	var layoutData = {}
	
	layoutData.radiusSize = Control.radius * 0.7
	
	layoutData.height = layoutData.radiusSize * 0.03
	
	layoutData.width = layoutData.radiusSize * 2
	
	return layoutData
}


