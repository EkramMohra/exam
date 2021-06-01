// Server setup
const express = require('express')
const app = express()
const api = require('./routes/api')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use('/', api)

const port = 4200
app.listen(process.env.PORT || port, function () {
    console.log(`Running on port ${port}`)
})