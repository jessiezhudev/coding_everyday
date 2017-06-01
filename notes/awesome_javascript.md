5 things that makes JavaScript WEIRD... and AWESOME
-> First Class Functions
function as variable
function a(first, second, callback){
  if(callback){
    callback()
  }
}
-> Event-driven Environment
ex: listening on click event
fire when fire
not stay in memory -> fast
-> Closures
reference to certain variables
-> Scope === variable access
context === this
Parent Scope with Child Scope
if there is no var in child scope, there will create a window vaiable
Using 'use strict' can avoid this.
-> Context
