var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Social Media' });
});
router.get('/Gallery',function(req,res){
 res.render('Gallery')
});
router.get('/reviews',function(req,res){
  res.render('reviews');
 });
module.exports = router;
