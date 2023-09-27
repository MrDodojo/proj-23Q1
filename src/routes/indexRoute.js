var express = require('express');
var router = express.Router();

//basispagina en /andere gebruiken beide index.ejs in views/index.ejs
router.get('/', (req, res) => {
    res.render('index', { title: 'My Website' });
  });

router.get("/andere", (req,res) => {
    res.render('index', { title: 'andere variabele'});
});

module.exports = router;