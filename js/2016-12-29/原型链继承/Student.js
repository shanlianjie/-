
function Student(){
	
	//使用call()方法可以使得两个构造函数(类)产生继承关系，即继承某一个类内部的属性和方法
	
	//call()继承只能继承父类的构造函数内提供的属性和方法，对于父类的原型里的属性和方法是继承不到的
	People.call(this)
	this.age = 28
}

//要想实现继承父类原型内的属性和方法就要实现原型链继承
Student.prototype = Object.create(People.prototype)

//一般要重置一下Constructor
Student.prototype.constructor = Student

/*
 * 重写父类的eat()方法。当父类的方法不能满足我们的需求时，我们可以重写父类的方法。
 * 重写分为：完全重写和部分重写。
 */
Student.prototype.eat = function(){
	
	//完全重写，把父类的方法完全覆盖
	alert('我喜欢吃肉')
}

Student.prototype.run = function(){
	
	//部分重写，保留父类原有的逻辑，同时添加自己的逻辑
	People.prototype.run.call(this)
	
	alert('我喜欢跑步')
}


