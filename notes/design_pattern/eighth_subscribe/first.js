// var salesoffice = {};  //定义售楼处
// salesoffice.clientList = []; //缓存列表，存放订阅者的回调函数
// salesoffice.listen = function(fn){ //增加订阅者
//   this.clientList.push(fn) //订阅的消息添加进缓存列表
// };
// salesoffice.trigger = function(){
//   for (var i = 0, fn; fn = this.clientList[i++];){
//     fn.apply(this, arguments)
//   }
// }
// salesoffice.listen(function(price, squaremeter){  //小明订阅消息
//   console.log('price=', price);
//   console.log('squaremeter=', squaremeter);
// })
// salesoffice.trigger(100, 200);

//以上函数的缺陷在于给所有对象都推送了一样的信息，通过key来定制化信息
var salesoffice = {};
salesoffice.clientList = {};
salesoffice.listen = function(key, fn){
  if(!this.clientList[key]){
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}
salesoffice.trigger = function(){
  var key = Array.prototype.shift.call(arguments);
  fns = this.clientList[key];
  if(!fns || fns.length == 0) { //如果没有订阅该消息，则返回
    return false;
  }
  for (var i = 0, fn; fn = fns[i++];){
    fn.apply(this, arguments)
  }
}
salesoffice.listen('88squaremeters', function(price){  //小明订阅消息
  console.log('price=', price);
})
salesoffice.trigger('88squaremeters', 100)
