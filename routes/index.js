var express = require('express');
var router = express.Router();
const bodyparser =require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Social Media' });
});
router.get('/Gallery',function(req,res){
 res.render('Gallery');
});
router.get('/post',function(req,res){
  res.render('post');
 });
 router.get('/review',function(req,res){
  res.render('reviews');
 });
 router.post('/submit',function(req,res){

 res.render('reviews');
 });

module.exports = router;
