// 获取表单、按扭、计算结果区域等标签
var form = document.getElementsByTagName('form')[0];
var button = document.getElementsByTagName('button')[0];
var section = document.getElementsByTagName('section')[0];

// 监听事件
form.addEventListener('input', hide);
button.addEventListener('click', calc);

hide();
// 隐藏计算结果区域
function hide(){
    section.style.display = 'none';
}    

// 计算工资
function calc(){
    // 获取输入
    var jishu = document.getElementById('jishu').value;
    var jixiao = document.getElementById('jixiao').value;
    var jiangjin = document.getElementById('jiangjin').value;
    
    // 转为数字
    jishu = parseFloat(jishu);
    jixiao = parseFloat(jixiao);
    jiangjin = parseFloat(jiangjin);
    
    if(isNaN(jishu + jixiao + jiangjin)) return;
    
    if (jishu + jixiao + jiangjin < 2000) {
        alert('您的工资低于最低工资标准！回家涨涨工资再来吧😄');
        return;
    }
    
    // 计算总额
    var zonge = jishu + jixiao + jiangjin;
 
    // 显示总额
    document.getElementById('zonge').innerHTML = zonge.toFixed(2);

    var jizhun = 0;
    if (zonge > 7662) { jizhun = 7662;}
    else { jizhun = zonge; }
    
    // 计算社保
    var yanglao = jizhun * 0.08;
    var yiliao = jizhun * 0.02;
    var shiye = jizhun * 0.005;
    var gongjijin = jizhun * 0.05;
    
    // 显示社保
    document.getElementById('yanglao').innerHTML = yanglao.toFixed(2);
    document.getElementById('yiliao').innerHTML = yiliao.toFixed(2);
    document.getElementById('shiye').innerHTML = shiye.toFixed(2);
    document.getElementById('gongjijin').innerHTML = gongjijin.toFixed(2);
    
    // 计算计税工资
    var jishui = zonge - yanglao - yiliao - shiye - gongjijin;
    
    // 显示计税工资
    document.getElementById('jishui').innerHTML = jishui.toFixed(2);
    
    // 计税基数
    var shuiji = jishui - 3500;
    var shui = 0;
    
    // 计算个人所得税
    if (shuiji <= 0) { shui = 0; alert('不需要缴税，好高兴啊！看看能发多少工资吧😊') }
    else if (shuiji <= 1500) { shui = shuiji * 0.03; }
    else if (shuiji <= 4500) { shui = shuiji * 0.1 - 105; }
    else if (shuiji <= 9000) { shui = shuiji * 0.2 - 555; }
    else if (shuiji <= 35000) { shui = shuiji * 0.25 - 1005; }
    else if (shuiji <= 55000) { shui = shuiji * 0.3 - 2755; }
    else if (shuiji <= 80000) { shui = shuiji * 0.35 - 5505; }
    else { shui = shuiji * 0.45 - 13505; }
    
    // 显示税及实发工资
    document.getElementById('shui').innerHTML = shui.toFixed(2);
    document.getElementById('shifa').innerHTML = (jishui - shui).toFixed(2);
    
    // 显示计算结果
    section.style.display = 'block';
}