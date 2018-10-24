const express = require('express');
const router = express.Router();
const data = require('../public/data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{data:data});
});
router.get('/article/:id?',function(req,res,next){
  const id = req.param('id')
  res.render('article',{data:data.filter((item) => item.id == id)})
})

router.get('/about',function(req,res,next){
  res.render('about')
})

router.get('/contact',function(req,res,next){
  res.render('contact')
})

router.get('/posts',function(req,res,next){
  res.render('posts')
})
module.exports = router;
