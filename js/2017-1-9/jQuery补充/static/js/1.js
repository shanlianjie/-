
//使用立即执行函数可以解决变量的作用域问题，也可以让代码立即执行
(function(){
	var a = 20

	function test2(){
	
		return a + 10
	}
	
})()


//test2()