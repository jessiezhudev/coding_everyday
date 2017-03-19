var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 阻止浏览器的XSS拦截
  res.set('X-XSS-Protection',0);
  // 服务器要解析XSS
  res.render('index', { title: 'Express', xss:req.query.xss});
});

module.exports = router;
