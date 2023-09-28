var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'My Website' });
  });

router.get("/andere", (req,res) => {
    res.render('index', {title: "oopp"})
})

module.exports = router;