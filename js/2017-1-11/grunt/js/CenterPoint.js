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
