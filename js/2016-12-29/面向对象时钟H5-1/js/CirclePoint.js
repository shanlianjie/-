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
