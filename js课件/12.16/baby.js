function Baby(name,age){
	this.name = name,
	this.age = age
}

Baby.prototype.drink = function(){
	console.log("我是婴孩，我只能喝牛奶")
}

Baby.prototype.sleep = function(){
	console.log("我是婴孩，我爱睡觉")
}

