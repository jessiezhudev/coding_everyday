//前端路由的简单实现
//1. 路由存储更新时的回调函数到回调数组routes中，回调函数负责对页面的更新
//2. 监听hash的变化
//3. 根据hash的变化来执行对应的回调函数

// 定义Router函数
function Router(){
  this.routes = {};
  this.currentUrl = '';
}

//将回调函数存入routes中
Router.prototype.route = function(path, callback){
  this.routes[path] = callback;
}

//每次hash改变时调用的函数
Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};

//the difference between onclick and addEventListener:
//onclick is a inline property - could be overwritten
//addEventListener can attach multiple events to an element - less than IE9, use attachEvent
Router.prototype.init = function(){
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}

window.Router = new Router();

//传入真实的hash改变函数, 来根据hash改变body的颜色
var content = document.querySelector('body');
var changeColor = function(color){
  content.style.backgroundColor = color;
}

Router.route('/', function(){
  changeColor('red');
})
Router.route('/blue', function(){
  changeColor('blue');
})
Router.route('/green', function(){
  changeColor('green');
})
window.Router.init();
