const express = require('express')
const mongoose = require('mongoose')
const rout = require('./rout')
require('dotenv').config()
const path = require('path')


const app = express()
const URI = process.env.MONGOURI

app.use(express.static(path.join(__dirname, '../client-vite/dist')))
app.use(express.json())
app.use('/tg', rout)

const start = async (req, res, next) => {
    try {
        await mongoose.connect(URI)
        app.listen(3000, () => {
            console.log('server start')
        }) 
    } catch (error) {
        console.log(error)
    }
    
}

start()