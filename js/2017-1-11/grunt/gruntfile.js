//使用模块导出功能导出grunt模块
module.exports = (grunt)=>{
	
	//对grunt进行初始化配置，配置grunt执行的功能操作
	grunt.initConfig({
		
		//读取package.json文件
		pkg:grunt.file.readJSON('package.json'),
		
		
		//concat就是执行代码合并的任务/操作
		concat:{
			
			//对当前操作添加配置信息
			options:{
				
				//打广告。该信息会在文件头部显示
				banner:'/*\nPowered By 智游教育\n*/'
			},
			
			//设置要合并的文件，以及合并后的文件
			build:{
				
				//src设置要合并的文件
				//写法1：
				//src:["js/Control.js","js/Clock.js","js/CenterPoint.js","js/CirclePoint.js","js/Seconds.js","js/Minutes.js","js/Hours.js"],
				
				//写法2：*代表通配符
				//src:'js/*.js',
				
				//写法3:(第一步：在package.json文件中配置所有文件;第二步：读取package.json文件(见顶部)
				src:'<%=pkg.allFiles%>',
				
				//dest设置合并到的文件
				dest:'js/MyClock.js'
			}
		},
		
		//添加一个压缩的操作
		uglify:{
			
			build:{
				
				//设置要压缩的文件
				src:'js/MyClock.js',
				
				dest:'js/MyClock.min.js'
			}
		},
		
		watch:{
			//scripts代表监测的是脚本文件，如果监测的是html文件则用'start'属性
			scripts:{
				
				files:["js/Control.js","js/Clock.js","js/CenterPoint.js","js/CirclePoint.js","js/Seconds.js","js/Minutes.js","js/Hours.js"]
			}
		}
		
	})
	
	//加载concat模块任务(使用npm install grunt-contrib-concat --save-dev 安装该模块)
	grunt.loadNpmTasks('grunt-contrib-concat')
	
	//加载uglify模块
	grunt.loadNpmTasks('grunt-contrib-uglify')
	
	//加载watch模块,对指定文件进行监测
	grunt.loadNpmTasks('grunt-contrib-watch')
	
	//注册要执行的任务
	//参数1：任务名称
	//参数2：操作列表
	grunt.registerTask('default',['concat','uglify'])
	
	grunt.registerTask('ug',['uglify'])
	
	grunt.registerTask('w',['watch'])
	
	//使用grunt 任务名称  代表执行该任务
}















