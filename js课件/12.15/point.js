//Point 构造函数，包含了点相关的数据（属性）和操作（方法）
function Point(x,y){
	this.x = x
	this.y = y
	//计算两点间的距离
	this.distanceTo = function(p){
		var distance = Math.sqrt( Math.pow(this.x-p.x,2) + Math.pow(this.y-p.y,2) )
		return distance
	},
	//计算两点与X轴夹角的弧度值
	this.radianTo = function(p){
		var radian = Math.atan((this.y-p.y)/(this.x-p.x))
		return radian
	}
	//计算两点与X轴夹角的角度
	this.angleTo = function(p){
		var radian = this.radianTo(p)
		var angle = radian*180/Math.PI
		return angle
	}
}
