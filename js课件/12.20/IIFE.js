;(function(global, Mz, undefined) { //上面一般只做模块的导出等等...构造函数是匿名的,通过参数传过去
   //global 是全局对象,如果是 window 就传 window,否则传 this. MZ 就是那个匿名函数. 
   // 形式undefined,没有传值,所以形式参数 undefined就是真正的 undefined.
   //这样的话,用到 window 和 undefined 的时候,就不用去外部作用域找了,可以提高性能
   //前面的分号可以有好多种写法,最多见的就是分号和!
  // 导出模块
  if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = Mz
	} else {
		global.Mz = Mz
	}

  if (typeof define === "function" && define.amd) {
  	define("Mz", [], function() {
  		return Mz;
  	})
  }
 
})(typeof window!== "undefined" ? window : this, function (opt) {
  // 构造函数
    opt = (typeof opt === 'object') ? opt : {}
    var default_opt = {
        res_url: '', //搞定
        delay_time: -1,// 搞定
        manual: true, //搞定
        ignore_errorType: ['script error'], //搞定
        repeat: 1 //搞定
    }

    for (k in default_opt) {
        // 传入参数时,将传入的参数和默认参数合并
        if (!opt[k]) opt[k] = default_opt[k]

        // this 为构造函数内部的 this,将参数选项转换为实例的属性
        this[k] = opt[k]
    }
})//构造函数是这一坨,也就是主要的逻辑代码
