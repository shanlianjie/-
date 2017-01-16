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


