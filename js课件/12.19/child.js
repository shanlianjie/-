function Child(name,age,height){
	
	//将Baby构造函数的代码继承下来
	Baby.call(this,name,age)
}

/*
 * 错误思路1：
 * 不可以直接将Baby的原型对象，作为Child的原型对象，
   如果两个共用一个原型对象，Child添加的方法，Baby也会拥有，不合理
 */
//Child.prototype = Baby.prototype


/*
 * 错误思路2：
 * new Baby()，创建出来一个对象，该对象通过Baby()构造函数初始化以后，默认就带有name和age属性，
 * 如果这样的话，name和age属性也会成为原型对象中的一部分，我们想要的是一个空白对象
 */
Child.prototype = new Baby()

Child.prototype.play = function(){
	console.log("小孩玩的方法")
}



