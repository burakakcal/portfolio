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
    pageText: 'Coming from an international background,I have acquired a wide range of experience while' +
        'dealing with different circumstances and cultures. Being the son of a diplomat, ' +
        'I have fundamentally had the opportunity to live in various countries: US, Germany, Finland, and England. ' +
        'The challenges I have encountered while living in these new environments have not only made me a more ' +
        'adaptive person but also gave me an array of skills along the way. This is perhaps the reason why I chose to work for corporate companies, giving me the opportunity to work together with a diverse group of people.\n' +
        'After earning my BA degree in Economics at Richmond, The American International University in London, ' +
        'I chose to pursue a career in web technologies as I have always gravitated towards it. ' +
        'I started my career at Siemens as technical support, got my first team management experience at Yellow Pages, ' +
        'and then went onto Project Management roles in both CCC (Google official partner), and Yandex (Russian tech giant). ' +
        'In addition to my team collaboration and management skills, I have also had the chance to expand my technical skills ' +
        'in web development by starting my own web design freelance business in Turkey. I have decided to relocate to Canada ' +
        'to get credentials on Interactive Media Design at Georgian College in hopes to further my career and enhance my knowledge ' +
        'in web development.'
  })
});

/* GET /work */
router.get('/work', (req, res, next) => {
  res.render('work', {
    title: 'My Projects',
    pageText: 'A list of my projects'
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
