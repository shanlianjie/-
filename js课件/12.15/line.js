//Line 构造函数：包含于线相关的 数据 和 操作

function Line(p1, p2) {
	//起点(左端点)
	this.start = p1.x < p2.x ? p1 : p2
	//终点(右端点)
	this.end = this.start == p1 ? p2 : p1

	//this.color = "yellow"
	
	Object.defineProperty(this, "color", {
		enumerable: true,
		configurable: true,
		set: function(value1) {
			console.log("set方法被执行了")
			//当color属性发生改变时，对div的背景颜色重新设置
			this.body.style.background = value1
		},
	})

	this.show = function() {
		var div = document.createElement("div")
		div.style.width = this.start.distanceTo(this.end) + "px"
		div.style.height = "2px"
		div.style.position = "absolute"
		div.style.left = this.start.x + "px"
		div.style.top = this.start.y + "px"
		div.style.transformOrigin = "left center"
		var angle = this.start.angleTo(this.end)
		div.style.transform = "rotate(" + angle + "deg)"
		div.style.backgroundColor = this.color
		document.body.appendChild(div)
		//给线段添加body属性，指向创建的div
		this.body = div
	}
}