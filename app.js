const express = require('express')
const exphbs = require('express-handlebars')
const routes =require('./routes/index')
require('./config/mongoose')
const app = express()
const cookieParser = require('cookie-parser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(routes)

app.listen(3000, () => {
    console.log(`express is running on http://localhost:3000`)
})