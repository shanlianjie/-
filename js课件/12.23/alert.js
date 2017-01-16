var style = document.createElement("style")
document.head.appendChild(style)
style.sheet.insertRule("html,body{height:100%;margin:0}",0)
style.sheet.insertRule("*{box-sizing: border-box;}",1)

function Alert(msg,callback){
	this.msg = msg
	this.callBack = callback
}


//创建遮罩层
Alert.prototype.createMaskLayer = function(){
	var mask = document.createElement("div")
	mask.id ="mask" //为了让子盒子可以找到它
	mask.style.position = "absolute"
	mask.style.left = "0"
	mask.style.top = "0"
	mask.style.height = "100%"
	mask.style.width = "100%"
	mask.style.zIndex ="999"
	mask.style.backgroundColor = "rgba(0,0,0,0.6)"
	mask.style.display = "flex"
	mask.style.justifyContent = "center"
	mask.style.alignItems = "center"
	document.body.appendChild(mask)

}

//创建白色的内容盒子
Alert.prototype.createWhiteBox = function(){
	
	var whiteBox = document.createElement("div")
	whiteBox.style.height = "200px"
	whiteBox.style.width = "300px"
	whiteBox.style.backgroundColor = "white"
	whiteBox.style.borderRadius = "10px"
	//找到遮罩层
	var mask = document.getElementById("mask")
	mask.appendChild(whiteBox)
}

//创建信息盒子
Alert.prototype.createMsgBox = function(){
	var msgBox = document.createElement("div")
	msgBox.style.width = "100%"
	msgBox.style.height = "150px"
	msgBox.style.textAlign ="center"
	msgBox.style.lineHeight = "150px"
	msgBox.style.borderBottom = "2px solid lightgray"
	msgBox.innerText = this.msg
	//获取白色的内容盒子
	var whiteBox = document.querySelector("#mask>div")
	whiteBox.appendChild(msgBox)
}

//创建按钮盒子
Alert.prototype.createBtnBox = function(){
	var btnBox = document.createElement("div")
	btnBox.style.width = "100%"
	btnBox.style.height = "50px"
	btnBox.style.display = "flex"
	btnBox.style.justifyContent ="space-between"
	//获取白色的内容盒子
	var whiteBox = document.querySelector("#mask>div")
	whiteBox.appendChild(btnBox)
	
	//创建btnBox中的按钮
	var button1 = document.createElement("div")
	button1.id ="cancel"
	button1.style.height = "100%"
	button1.style.width ="100%"
	button1.style.backgroundColor = "red"
	button1.innerText = "按钮"
	button1.style.textAlign = "center"
	button1.style.lineHeight = "50px"
	btnBox.appendChild(button1)
	
	//注意：改变了action方法中this的指向。将action中this的指向由button改为了alert
	button1.onclick = this.action.bind(this)
}

//点击按钮的时候会调用的方法
Alert.prototype.action = function(){
	//1.找到遮罩层,删除遮罩层
	var mask = document.getElementById("mask")
	document.body.removeChild(mask)
	console.log(this)// alert
	
	//2. 执行回调函数
	//如果传过来的是个函数，才进行调用
	if(typeof this.callBack =="function"){
		this.callBack()
	}
}

Alert.prototype.show = function(){
	console.dir(this) //alert对象
	this.createMaskLayer()
	this.createWhiteBox()
	this.createMsgBox()
	this.createBtnBox()
	
}
