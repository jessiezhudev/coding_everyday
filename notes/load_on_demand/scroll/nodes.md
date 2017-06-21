###important difference among various height
1. scrollHeight: ENTIRE content & padding (visible or not)
including content not visible on the screen due to overflow
2. clientHeight: visible content & padding
3. offsetHeight: visible content & padding + border + element scrollbar

http://harttle.com/2016/04/24/client-height-width.html
1. window.innerHeight - DOM视口的大小，包括滚动条
不支持innerHeight, 可以用document.documentElement.clientHeight 或 document.body.clientHeight   
documentElement是文档根元素，即HTML标签   
兼容写法：
    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

documentElement.clientHeight不包括整个文档的滚动条，但包括<html>元素的边框
body.clientHeight不包括整个文档的滚动条，也不包括<html>元素的边框，也不包括<body>的边框和滚动条。

2. window.outerHeight - 这个浏览器窗口的大小，包括窗口标题、工具栏、状态栏等
3. scrollTop：元素内容向上滚动了多少像素，如果没有滚动则为0。

<!-- TODO --> reflow and repaint http://harttle.com/
