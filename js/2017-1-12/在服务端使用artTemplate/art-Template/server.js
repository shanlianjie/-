
const express = require('express'),
	  
	  //加载art-template模块(npm install art-template --save 安装)
	  artTemplate = require('art-template'),

	  app = express()
	  
//app.use(express.static('static'))

//设置是否对渲染模板进行缓存。一般在开发阶段设置为false，在发布的时候设置true有利于提高渲染的效率。
artTemplate.config('cache',false)

//使用artTemplate模板功能，对html格式的文件进行处理
app.use('.html',artTemplate.__express)

//http://127.0.0.1:3000
//动态页面：就是需要服务器参数处理，并且动态生成并返回的页面。
app.get('/',(req,res)=>{
	
	var data = {
		contents:[{
			type:'book',
			name:'《HTML5开发指南》',
			img:'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3095294300,2274567352&fm=85&s=9A207A2297AC5D0D5356C4490200D0FB',
			desc:'高性能JavaScript模板引擎... node demo/node-template-express.js 若使用 js 原生语法作为模板语法,请改用 '
		},
		{
			type:'websit',
			name:'MDN',
			url:'https://developer.mozilla.org',
			desc:'JavaScript ( JS ) 是一种轻量级，解释型的，有着 一等函数 (First-class Function) 的编程语言。虽然它是作为开发web页面的脚本语言而出名的，但是在很多非浏览器环境中也使用JavaScript，例如 node.js 和 Apache CouchDB。JS是一种基于原型、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如：函数式编程）编程风格。了解更多 关于JavaScript。'
		},
		{
			type:'book',
			name:'JavaScript高级编程',
			img:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=747198531,2098089810&fm=58',
			desc:'安徽网新自2001年成立以来,一直从事网站优化工作,16年的经验更值得放心.网新一直奉行"客户至上,用心服务"的宗旨,想客户之所想,急客户之所急,竭诚为您服务.'
		}]
	}
	
	//根据文件名称找到对应模板进行渲染
	 var html = artTemplate('template',data)
	
	res.status(200).send(html)
})

app.listen(3000,()=>{
	
	console.log('server running...')
})
