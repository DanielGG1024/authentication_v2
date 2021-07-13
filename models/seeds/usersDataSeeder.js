const User = require('../userDataSchema')
const usersData = require('./usersData.json')
const allUsers = usersData.users
const db = require('../../config/mongoose')

db.once('open', () => {
    allUsers.forEach((item) => {
        User.create({
            firstName: item.firstName,
            email: item.email,
            password: item.password
        }).then(() => {
            db.close()
        })
    })
    console.log('done')
})