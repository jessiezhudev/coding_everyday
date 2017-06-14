//传统面向对象语言中的装饰者模式实现
//装饰者模式将一个对象嵌入另一个对象之中，实际上相当于这个对象被另一个对象包装起来，形成包装链。
// var Plane = function(){}
// Plane.prototype.fire = function(){
//   console.log("发射普通子弹")
// }
// var MissileDecorator = function(plane){
//   this.plane = plane;
// }
// MissileDecorator.prototype.fire = function(){
//   this.plane.fire();
//   console.log('发射导弹')
// }
// var AtomDecorator = function(plane){
//   this.plane = plane;
// }
// AtomDecorator.prototype.fire = function(){
//   this.plane.fire();
//   console.log('发射原子弹')
// }
//
// var plane = new Plane();
// plane = new MissileDecorator(plane);
// plane = new AtomDecorator(plane);
// plane.fire();

//JavaScript的装饰者实现，可以直接改写对象的方法
var plane = {
  fire: function(){
    console.log('发射普通导弹')
  }
}
var MissileDecorator = function(){
  console.log('发射导弹')
}
var AtomDecorator = function(){
  console.log('发射原子弹')
}
var fire1 = plane.fire;
plane.fire =  function(){
  fire1();
  MissileDecorator();
}
var fire2 = plane.fire;
plane.fire = function(){
  fire2();
  AtomDecorator();
}
plane.fire()
//装饰函数 通过保存原引用的方式就可以保存某个函数, 符合开放-封闭原则
var a = function(){
  console.log(1)
}
var _a = a;
a = function(){
  _a();
  console.log(2)
}
a()

//以上做法的两个缺点 1. 函数的装饰链越长，需要维护的中间变量越多 2.this被劫持 例子：document.getElementById中的this本应该指向document
