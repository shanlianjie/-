/*
 * 构造圆盘刻度点的构造函数
 */
function CirclePoint(minutes){
	
	//获取每一个点对应的分钟数
	this.minutes = minutes
	
	//计算每一个刻度点对应的弧度
	this.arc = (minutes-15) * 6 * Math.PI / 180
	
	Control.call(this)
	
}
/*
 * 实现原型链继承
 */
CirclePoint.prototype = Object.create(Control.prototype)

CirclePoint.prototype.constructor = CirclePoint
/*
 * 重写Control的render方法
 */
CirclePoint.prototype.render = function(){
	
	Control.prototype.render.call(this)
}

/*
 * 重写Control的layout方法
 */
CirclePoint.prototype.layout = function(){
	
    var width = this.minutes % 5 == 0 ? Control.radius * 0.03 : Control.radius * 0.02;
    
    var height = width;
    
    var radiusSize = Control.radius * 0.8
    
    this.ele.style.width = width + 'px';
    
    this.ele.style.height = height + 'px';
    
    this.ele.style.position = 'absolute';
    
    this.ele.style.left = Math.cos(this.arc) * radiusSize + Control.clientWidth/2 - width/2 + 'px';
    
    this.ele.style.top = Math.sin(this.arc) * radiusSize + Control.clientHeight/2 - height/2 + 'px';
    
    this.ele.style.backgroundColor = 'black';
    
    this.ele.style.borderRadius = '50%';
   
}
