function Child(name,age,height){
	
	//Child的构造函数 与 Baby的 构造函数 基本一致
	//所以 可以使用Baby的构造函数，构造Child对象，简化代码
	//注意：修改this指向
	//实现继承构造函数内的属性
	Baby.call(this,name,age)
	
	this.height = height
	
}

//创建一个空构造函数，原型是baby的原型
//根据空构造函数创建一个对象，赋值给Child的原型
function Temp(){}
Temp.prototype = Baby.prototype
var obj = new Temp() //obj的原型对象 是Baby的原型对象（既）

Child.prototype = obj //用obj将Child的原来的原型对象覆盖掉

//因为将默认的原型对象覆盖了，给自己创建的原型对象的添加constructor属性，指向Child构造函数
Child.prototype.constructor = Child

Child.prototype.play = function(){
	console.log("child 很贪玩")
}
