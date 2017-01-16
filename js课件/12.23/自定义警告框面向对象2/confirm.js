var style = document.createElement("style")
document.head.appendChild(style)
style.sheet.insertRule("html,body{height:100%;margin:0}", 0)
style.sheet.insertRule("*{box-sizing: border-box;}", 1)

function Confirm(msg,callback) {

	Alert.call(this,msg,callback)
}

//实现原型链的继承
Confirm.prototype = Object.create(Alert.prototype)
Confirm.prototype.constructor = confirm

Confirm.prototype.createBtnBox = function() {
	Alert.prototype.createBtnBox.call(this)
		//获取取消按钮
	var cancelBtn = document.getElementById("cancel")
	var btnBox = cancelBtn.parentElement
	cancelBtn.innerText = "取消"
		
		//创建确定按钮
	var confirmBtn = document.createElement("div")
	confirmBtn.style.height = "100%"
	confirmBtn.style.width = "100%"
	confirmBtn.style.backgroundColor = "red"
	confirmBtn.style.borderLeft ="2px solid gray"
	confirmBtn.innerText = "确定"
	confirmBtn.style.textAlign = "center"
	confirmBtn.style.lineHeight = "50px"
	btnBox.appendChild(confirmBtn)
    
    confirmBtn.onclick =this.action
    //给btn添加自定义属性，保存confirm对象
    confirmBtn.that = this
}