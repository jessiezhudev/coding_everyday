//鸭子类型代码实现
var duck = {
  duckSinging: function(){
    console.log('gagaga')
  }
}
var chicken = {
  duckSinging: function(){
    console.log('gagaga')
  }
}
var choir = []
var joinChoir = function(animal){
  if(animal && typeof animal.duckSinging == 'function'){
    choir.push(animal);
    console.log('welcome to choir');
    console.log('total number is ' + choir.length)
  }
}
joinChoir(duck)
joinChoir(chicken)
