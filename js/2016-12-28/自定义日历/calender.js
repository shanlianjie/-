
/*
 * 构造函数 用来构造日历对象。
 * 构造函数和普通函数：
 * 1,函数名：普通函数是为了执行某一个功能，所以一般用动词作为函数名;构造函数主要是构造实例对象，所以一般用名词作为函数名，并且首字母要大写。
 * 2,构造函数内部使用this来添加属性(this指的是构造的实例对象)
 * 3,构造函数不存在返回值，即没有return语句。因为构造函数就是用来构造对象
 */
function Calender(){
	
	var aDate = new Date()
	
	console.log(aDate.getDate())
	
	var times =  aDate.setDate(-2)
	
	var newDate = new Date(times)
	
	console.log(newDate.getDate())
	
	
	//记录当前日期
	var currentDate = new Date()
	
	//记录今天的日期
	var today = new Date()
	
	var that = this

	//创建容器
	var main = document.createElement('div');
	
	main.style.width = '500px';
	
	main.style.margin = '100px auto';
	
	main.style.backgroundColor = 'orange';
	
	document.body.appendChild(main);
	
	//给构造函数添加实例函数，用来创建顶部视图
	this.createHeaderView = function(){
		
		var section = document.createElement('section');
		
		section.style.width = '100%';
		
		section.style.height = '6rem';
		
		
		//section.style.backgroundColor = 'red';
		
		main.appendChild(section);
		
		//显示日期的span
		var dateSpan = document.createElement('span');
		
		var year = currentDate.getFullYear();
			
		var month = currentDate.getMonth() + 1;
		
		dateSpan.innerHTML = year + '年' + month + '月'
		
		section.appendChild(dateSpan);
		
		//左控制按钮
		var leftSpan = document.createElement('span')
		
		leftSpan.innerHTML = '&lt;';
		
		leftSpan.onclick = function(){
			
			//alert('left')
			//更新日期
			updateCurrentDate(0)
		}
		
		section.appendChild(leftSpan)
		
		//右控制按钮
		var rightSpan = document.createElement('span')
		
		rightSpan.innerHTML = '&gt;';
		
		rightSpan.onclick = function(){
			
			//alert('right')
			//更新日期
			updateCurrentDate(1)
		}
		section.appendChild(rightSpan)
		
		//更新当前日期
		function updateCurrentDate(index){
			
			var year = currentDate.getFullYear();
			
			var month = currentDate.getMonth();
			
			index == 0 ? month-- : month++
			
			//根据修改后的月份重置当前日期。setMonth()方法会根据当前切换到的月份重置当前日期。如果月份超过11会自动换算到下一年，如果小于0会自动倒退一年
			
			currentDate.setMonth(month)
			
			//重新获取重置后的年月
			year = currentDate.getFullYear()
			
			month = currentDate.getMonth() + 1
			
			dateSpan.innerHTML = year + '年' + month + '月'
			
			//重新刷新页面，根据当前的切换到的日期来布局页面
			main.innerHTML = ''
			
			that.show()
			
		}
		
		var allSpan = section.querySelectorAll('span')
		
		for(var i = 0;i < allSpan.length;i++){
			
			var span = allSpan[i]
			
			span.style.display = 'inline-block';
			
			span.style.color = 'white';
			
			span.style.fontSize = '2rem';
			
			span.style.height = '100%';
			
			span.style.lineHeight = '6rem';
			
			span.style.textAlign = 'center';
			
			span.style.width = i == 0 ? '50%' : '25%';
			
			//span.style.backgroundColor = 'blue';
			
			span.style.verticalAlign = 'bottom';
			
			
		}
		
		
	}
	
	//给构造函数添加实例方法用来构建星期视图
	this.createWeekView = function(){
		
		var section = document.createElement('section')
		
		//section.style.backgroundColor = 'blue';
		
		section.style.height = '30px';
		
		section.style.display = 'flex';
		
		main.appendChild(section)
		
		var weeks = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
		
		for(var i = 0;i < weeks.length;i++){
			
			var span = document.createElement('span');
			
			span.innerHTML = weeks[i];
			
			span.style.width = '100%';
			
			span.style.flexGrow = '1';
			
			span.style.textAlign = 'center';
			
			span.style.color = 'white';
			
			section.appendChild(span);
			
		}
	}
	
	//实例方法用来显示日期的视图
	this.createDateView = function(){
		
		var section  = document.createElement('section')
				
		//section.style.backgroundColor = 'red';
		
		main.appendChild(section);
		
		var table = document.createElement('table');
		
		table.style.width = '100%';
		
		section.appendChild(table);
		
		for(var i = 0; i < 6;i++){
			
			//插入行
			var tr =  table.insertRow()
			
			for(var k = 0 ;k < 7 ; k++){
				
				//往行内插入一列
				var td =  tr.insertCell()
				
				td.innerHTML = i * 7 + k;
				
				td.style.height = '40px';
				
				td.style.lineHeight = '50px';
				
				td.style.textAlign = 'center';
				
				td.style.backgroundColor = 'lightblue';
				
				td.style.color = 'white';
				
				var index = i * 7 + k;
				
				//获取每一个格的日期对象
				var eachDate =  getEachDate(index)
				
				var eachDay = eachDate.getDate()
				
				td.innerHTML = eachDay
				
				var eachYear = eachDate.getFullYear()
				
				var eachMonth = eachDate.getMonth()
			
				//获取切换到的年月
				var currentYear = currentDate.getFullYear()
				
				var currentMonth = currentDate.getMonth()
				
				//获取今天对应的年月日
				var toadyYear = today.getFullYear()
				
				var todayMonth = today.getMonth()
				
				var todayDay = today.getDate()
				//判断换算出的每一个格对应的日期是否和当前日期一致，一致的话就着重显示
				if(currentYear == eachYear && currentMonth == eachMonth){
					
					td.style.backgroundColor = 'lightseagreen'
				}
				
				//如果换算出来的每一个格对应的年月日和今天的年月日完全一致，则代表是今天的日期，需要着重显示
				if(toadyYear == eachYear && todayMonth == eachMonth && todayDay == eachDay){
					
					td.style.backgroundColor = 'brown'
				}
			}
		}
		
		
		
		
		//换算每一个格的日期
		function getEachDate(index){
			
			//setDate()方法是用来获取指定的日期的毫秒数，这里获取1号的日期对应的毫秒数，返回值是指定日期的毫秒数。
			var firstDayTimes = currentDate.setDate(1)
			
			//构建1号对应的日期对象
			var firstDate = new Date(firstDayTimes)
			
			//获取一号对应的星期几
			var week = firstDate.getDay()
			
			console.log('>>>>>>' + week)
			
			console.log('=====' + firstDate.getDate())
			
			if(week == 0){
				
				week = 7
			}
			week = week - 2;
			//setDate(n)n是正值代表设置为n号的日期，0和负值代表把日期往前倒退n天，并且需要注意的是倒退时是按照月初作为参考倒退的，即当前月的1号
			//setDate(0)代表后退1天
			//setDate(-1)代表后退2天
			//setDate(-2)代表后退3天
			//依次类推...
			var aTimes = firstDate.setDate(-week)
						
			//假设第一个格是1号，换算每一个格对应的毫秒数
			var eachDayTimes = aTimes + 24 * index * 60 * 60 * 1000
			
			//构建每一个格对应的日期对象
			var eachDate = new Date(eachDayTimes)
			
			//var firstDay = firstDate.getDate()
			
			return eachDate
		}
	}
	
	//添加实例方法，控制日历显示
	this.show = function(){
		
		this.createHeaderView();
		
		this.createWeekView();
		
		this.createDateView()
	}
}

//实例属性
var myCal =  new Calender()
myCal.name = 'roy'

//静态变量(属性)和静态函数：使用构造函数名(类名)声明的属性和函数

//声明静态属性和静态函数,使用构造函数名来声明
Calender.age = 28

Calender.func = function(){
	
	alert('静态函数调用了')
}

//调用,使用构造函数名来调用
alert(Calender.age)

Calender.func()




