const express = require('express');
const router = express.Router();
const {changeJson,getJson} = require('../model/changeBlog')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const result = await getJson()
  res.render('home', {
    data: result.data
  });
});

router.get('/article/:id?', async function (req, res, next) {
  const result = await getJson()
  const id = req.param('id')
  res.render('article', {
    data: result.data.filter((item) => item.id == id)
  })
})

router.get('/about', function (req, res, next) {
  res.render('about')
})

router.get('/contact', function (req, res, next) {
  res.render('contact')
})

router.get('/edit/:id?', async function (req, res, next) {
  const result = await getJson()
  const id = req.param('id')
  res.render('edit', {
    data: result.data.filter((item) => item.id == id)
  })
})

router.get('/posts/:id?', async function (req, res, next) {
  const result = await getJson()
  const id = req.param('id')
  res.render('edit', {
    data: result.data.filter((item) => item.id == id)
  })
})

router.post('/form', async function (req, res, next) {
  console.log(req.body)
  const result = await changeJson(req.body.id, req.body)
  if(result){
    res.json({
      'status': 'success',
      'msg': '编辑成功'
    })
  } else {
    res.json({
      'status':'fail',
      'msg':'编辑失败'
    })
  }


})
module.exports = router;