var express = require('express');
var router = express.Router();

//评论内容放在服务器的缓存中，为了方便不连接数据库
var comments = {};

//具有编码功能的函数
function html_encode(str){
  var s='';
  if(str.length==0) return ""
  //TODO &与>的字符串编码一样。
  s = str.replace(/&/g, "&gt;");
  s = str.replace(/</g, "&lt;");
  s = str.replace(/>/g, "&gt;");
  //空格转义\s
  s = str.replace(/\s/g, "&nbsp;");
  s = str.replace(/\'/g, "&#39;");
  s = str.replace(/\"/g, "&quot;");
  // 换行符
  s = str.replace(/\n/g, "<br>")
  return s;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 提交评论接口
// req请求，res响应，next捕获错误
router.get('/comment', function(req, res, next){
  //TODO why req.query.comment?
  comments.v = html_encode(req.query.comment);
})

//用户拉取评论的接口
router.get('/getComment', function(){
  res.json({
    comment: comments.v
  })
})

module.exports = router;
