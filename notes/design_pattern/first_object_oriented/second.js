//多态代码实现
// var makesound = function(animal) {
//   if(animal instanceof Duck){
//     console.log('gagaga')
//   }else if(animal instanceof Chicken){
//     console.log('gegege')
//   }
// }
// var Duck = function(){}
// var Chicken = function(){}
// makesound(new Duck())
// makesound(new Chicken())
//以上代码，若是增加了成员，修改代码将变得危险且麻烦
//将不变的地方分离开来
var makesound = function(animal){
  animal.sound()
}
var Duck = function(){}
Duck.prototype.sound = function(){
  console.log('gagaga')
}
var Chicken = function(){}
Chicken.prototype.sound = function(){
  console.log('gegege')
}
makesound(new Duck())
makesound(new Chicken())

//渲染地图
var renderMap = function(map){
  if(map.show instanceof Function){
    map.show()
  }
}
var googleMap = {
  show: function(){
    console.log('show google map')
  }
}
var baiduMap = {
  show: function(){
    console.log('show baidu map')
  }
}
renderMap(googleMap)
renderMap(baiduMap)
