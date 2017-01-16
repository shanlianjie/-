/*
  * CenterPoint()作为中心圆点的构造函数
  */
function CenterPoint(){
	
	Control.call(this)
	
	
}
/*
 * 实现原型链继承
 */
CenterPoint.prototype = Object.create(Control.prototype)

CenterPoint.prototype.constructor = CenterPoint

/*
 * 重写render()负责创建中心点的标签元素
 */
CenterPoint.prototype.render = function(){
	
	Control.prototype.render.call(this)
}

/*
 * 重写layout()方法，负责对中心点进行布局和样式设置
 */
CenterPoint.prototype.layout = function(){
	
	var width = Control.radius * 0.05;
	
	var height = Control.radius * 0.05;
	
	var radiusSize = Control.radius;
	
	this.ele.style.width = width + 'px';
	
	this.ele.style.height = height + 'px';
	
	this.ele.style.position = 'absolute';
	
	
	this.ele.style.left = (Control.clientWidth / 2 - width / 2) + 'px';
	
	this.ele.style.top = (Control.clientHeight / 2 - height / 2) + 'px';
	
	this.ele.style.backgroundColor = 'black';
	
	this.ele.style.borderRadius = '50%';
}
