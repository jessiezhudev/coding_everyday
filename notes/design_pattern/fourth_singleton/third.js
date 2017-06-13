//把负责管理单例的代码移除
var CreateDiv = function(html) {
  this.html = html;
  this.init();
}
CreateDiv.prototype.init = function() {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.appendChild(div);
}

//引入代理类proxySingletonCreateDiv
var proxySingletonCreateDiv = (function(){
  var instance;
  return function(html){
    if(!instance) {
      instance = new CreateDiv(html)
    }
    return instance;
  }
})()

var a = proxySingletonCreateDiv('sven1');
var b = proxySingletonCreateDiv('sven2');
console.log(a===b);
