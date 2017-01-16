

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