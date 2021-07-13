const express = require('express')
const router = express.Router()

const User = require('../models/userDataSchema')

router.get('/', (req, res) => {
    res.render('login',)
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.find({ email, password })
        .lean()
        .then(function (user) {
            // console.log(user)
            if (user.length === 1) {
                res.render('index', { firstName: user[0].firstName })
            } else {
                res.render('login', { email, password, notification: 1})
            }
        })
        .catch(error => console.log(error))
})



module.exports = router