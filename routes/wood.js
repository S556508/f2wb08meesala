var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wood', { title: 'Search Results for wood' });
  
});

module.exports = router;