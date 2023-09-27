var express = require('express');
var router = express.Router();

router.get('/voorbeeld', (req, res) => {
    res.render('voorbeeld', { title: 'My Website' });
  });

router.get("/andere", (req,res) => {
    res.render('index', {title: "andere pagina maar zelfde html???"})
})

module.exports = router;