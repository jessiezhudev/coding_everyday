//透明的单例模式, 用户从这个类中创建对象的时候，可以像使用其他任何普通类一样。
var CreateDiv = (function(){
  var instance;
  var CreateDiv = function(html){
    if(instance){
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };
  CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };
  return CreateDiv;
})()

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');
console.log( a === b);

//缺点，为了把instance封装起来，我们使用了自执行的匿名函数和闭包，并且让这个函数返回真正的Singleton构造方法，增加了复杂度
//createDiv的构造函数负责了两件事情：创建对象和执行初始化函数。违反了“单一职责原则”的原则
//假如要创建多个div，则要改写这个函数
