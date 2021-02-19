let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Burak's Portfolio" });
});


/* GET /about */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Me',
    pageText: 'Here is some information about me in detail'
  })
});

/* GET /work */
router.get('/work', (req, res, next) => {
  res.render('work', {
    title: 'My Projects',
    pageText: 'A list of my projects'
  })
})


module.exports = router;
