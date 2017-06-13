var express = require('express');
var router = express.Router();

/* GET home page. */
//using get because we are gonna respond to the get request
// router.get('/', function(req, res, next) {
  //res.render can do a templating white res.send can send data
  // res.render('index', { title: 'Express' });
  //index file will look for the views/index.hjs file
  // res.send(404)
  //by sending the code the page will response corresponding text
  // res.send({
  //   users: ['Will', 'Laura']
  // })
  //by sending json
// });
// router.post('/', function(req, res, next){
  // req.query.name //query can get all the params
// })

// router.get('/', function(req, res, next){
//   console.log(req.query);
// })
router.get('/users/:id', function(req, res, next){
  console.log(req.params);
  res.send(req.params.id, 200);
});

module.exports = router;
