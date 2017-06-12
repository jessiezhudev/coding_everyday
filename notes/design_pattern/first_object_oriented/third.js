//原型模式实现 ECMAScript 5提供了Object.create方法，可以用来克隆对象
var Plane = function(){
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;
Object.create = Object.create || function(obj){
  var F = function(){};
  F.prototype = obj;
  return new F();
};
var clonePlane = Object.create(plane);
console.log(clonePlane);
