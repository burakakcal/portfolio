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
    pageText: 'You can find out more about me here'
  })
});

/* GET /work */
router.get('/work', (req, res, next) => {
  res.render('work', {
    title: 'My Projects',
    pageText: 'a list of some of my work'
  })
});

/* GET /form */
router.get('/form', (req, res, next) => {
  res.render('form', {
    title: 'Contact Form',
    pageText: 'Please fill in the contact form below and I will get back to you ASAP.'
  })
});


module.exports = router;
