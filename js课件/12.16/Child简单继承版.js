function Child(name,age,height){
	
	Baby.call(this,name,age)
	
	this.height = height
}

//构造原型链的第二种写法 
//create方法会创建一个对象，同时把参数作为这个对象的原型
Child.prototype =Object.create(Baby.prototype) 
Child.prototype.constructor = Child

Child.prototype.play = function(){
	console.log("child 很贪玩1111111")
}

