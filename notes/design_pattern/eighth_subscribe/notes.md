发布-订阅模式又称观察者模式，定义对象间的一对多模式。当一个对象的状态发生改变时，所有依赖它的对象都将得到通知。    

发布-订阅模式可以广泛应用于异步编程中，这是一种代替传递回调函数的方案。

只要在DOM节点上绑定过事件函数，就曾经使用过发布-订阅模式。

document.body.addEventListener('click', function(){
  alert(2)
}, false)
document.body.click();

当body节点被点击时，body节点便会向订阅者发布这个消息
