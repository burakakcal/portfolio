// require express and enable express routing
const express = require('express')
const router = express.Router()

const Project = require('../models/contact')

/* GET /contacts */
router.get('/', (req, res, next) => {
    // use Project model to fetch all contacts for display
    Project.find((err, projects) => {
        if (err) {
            console.log(err)
        }
        else {
            // load the index view, set the title, and pass the query resultset as "contacts"
            res.render('contacts/index', {
                title: 'My Projects',
                projects: projects
            })
        }
    })
})

/* GET /contacts/add */
router.get('/add', (req, res, next) => {
    res.render('contacts/add', { title: 'Project Details' })
})

/* POST /contacts/add */
router.post('/add', (req, res, next) => {
    // use the Project model to save the form data to MongoDB
    Project.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }, (err, newProject) => {
        if (err) {
            console.log(err)
        }
        else {
            // if successful, redirect to contacts index
            res.redirect('/contacts')
        }
    })
})


// make public
module.exports = router;