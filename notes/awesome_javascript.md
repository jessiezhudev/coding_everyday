# 5 things that make JavaScript WEIRD... and AWESOME
- First Class Functions
function as variable
function a(first, second, callback){
  if(callback){
    callback()
  }
}
- Event-driven Environment
ex: listening on click event
fire when fire
not stay in memory -> fast
- Closures
reference to certain variables
- Scope === variable access
Parent Scope with Child Scope
if there is no var in child scope, there will create a window vaiable
Using 'use strict' can avoid this.
- Context
context === this
depends on who runs it and how it runs.
var obj = {
  foo: funtion(){
    console.log(this)
  }
}
three way to change context: apply, call, bind
obj.foo.call(window)
the diffrence between apply and call is that apply send arguments as array
bind returns a bound function, not executed immediately
$('body').on('click', obj.foo) -> this === body; when binding a event listener, the context would be the element that is clicked

$('li').on('click', function(){
  }) -> bind click event on each li
