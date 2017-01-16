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


