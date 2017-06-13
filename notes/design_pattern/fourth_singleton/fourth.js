//降低全局变量的命名污染
//1. 命名空间
//2. 使用闭包封装私有变量
//惰性单例： 需要的时候才创建对象实例

//抽离管理单例的函数
var getSingle = function(fn){
  var result;
  return function(){
    //如果result已被赋值，它会返回这个值
    return result || (result = fn.apply(this, arguments))
  }
}

var createLoginLayer = function(){
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}

var createSingleLoginLayer = getSingle( createLoginLayer );
createSingleLoginLayer()
