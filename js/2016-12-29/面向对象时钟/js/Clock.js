function Clock() {

	//构建中心点
	var center = new CenterPoint()
	
	//构建圆盘刻度点
	var allPoint = []
	
	for(var i = 0;i < 60;i++){
		
		var circle =  new CirclePoint(i)
		
		allPoint.push(circle)
	}
	
	//创建秒针
	var seconds =  new Seconds()
	
	//创建分针
	var minutes = new Minutes()
	
	
	/*
	 * window.onresie()监听窗口的变化
	 */
	window.onresize = function() {

		Control.prototype.resize()
		
		//重新布局centerPoint
		center.layout()
		
		//重新布局60个刻度点
		for(var i = 0; i < allPoint.length;i++){
			
			var aPoint = allPoint[i]
			
			aPoint.layout()
		}
		
		//重新布局秒针
		seconds.layout()
		
		//重新布局分针
		minutes.layout()
	}
	
	window.onresize()
}

