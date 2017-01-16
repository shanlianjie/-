 /*
  * 构造分针的构造函数
  */
 function Minutes(){
 	
 	Seconds.call(this)
 }
 
 Minutes.prototype = Object.create(Seconds.prototype)
 
 Minutes.prototype.constructor = Minutes
 
 /*
  * 重写seconds的renderData方法
  */
 Minutes.prototype.renderData = function(){
 	
 	var date = new Date()
 	
 	var seconds = date.getSeconds()
 	
 	var currentSeconds = date.getMinutes() * -60 - 15 * 60 - seconds;
 	
 	var renderData ={
 		delay:currentSeconds,
 		duration:'3600s'
 	}
 	
 	return renderData
}
 
 /*
  * 重写render方法
  */
Minutes.prototype.render = function(){
 	
 	Seconds.prototype.render.call(this)
 	
}

Minutes.prototype.layoutData = function(){
	
	var layoutData = {
		
		color:'blue',
		width:Control.radius * 2 * 0.7,
		height:Control.radius*0.02,
		left:Control.clientWidth/2 - Control.radius * 0.7,
		top:Control.clientHeight/2 - Control.radius*0.02 / 2,
			
	}
	
	return layoutData
}
Minutes.prototype.layout = function(){
 	
 	Seconds.prototype.layout.call(this)
}
