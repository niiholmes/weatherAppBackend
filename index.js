//modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()


//variables
const userRoute = require('./routes/userRoute')
const corsOptions = {
    origin:true,
    credentilas:true,
    optionSuccessStatus:204
}
//database connection
const dbLink = process.env.dbLink

mongoose.connect(dbLink, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    app.listen(7000, () => {
    console.log('Server is online and Database is connected!')
    })
})

//middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser)


//routes
app.use(userRoute)


//error responses

