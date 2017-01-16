function Baby(name,age){
	 this.name = name
	 this.age = age
}

Baby.prototype.drink = function(){
	console.log("婴儿喝牛奶")
}

Baby.prototype.sleep = function(){
	console.log("婴儿睡觉")
}

