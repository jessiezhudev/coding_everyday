//实现单例模式的代码
var Singleton = function(name){
  this.name = name;
  this.instance = null;
}
Singleton.prototype.name = function(){
  alert(this.name)
}
//TODO 为什么这里没有prototype，这是一种什么写法？
//getInstance是写在对象上的静态方法。prototype中的方法只有在实例化一个对象的时候，才能被调用
Singleton.getInstance = function(name){
  if(!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a === b);
//以上通过Singleton.getInstance来获取Singleton类的唯一对象，增加了这个类的“不透明性”，Singleton类的使用者必须知道这是一个单例类，这不是个很好的单例模式
