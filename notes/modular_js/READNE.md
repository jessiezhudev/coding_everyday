Modular JavaScript
Some ground rules:
- self-contained module  独立的模块

    -everything to do with my module is in my module

    -no global variables 没有全局变量

    -if a module manages more than one thing it should be split up
    如果一个模块做的事情多于一件，那它应该拆分开来。

- separation of concerns

- DRY code: Don't repeat yourself 不要重复自己的代码
- efficient DOM usage 有效的DOM操作
    very few $(selections)  少量的$选择器
- no memory leaks 没有内存泄露
    - all events can be unbound 所有的事情都能被解绑
    
