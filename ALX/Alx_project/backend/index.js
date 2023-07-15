const express = require('express');
const workout = require('./routes/workout');
require('dotenv').config()
const mongoose = require('mongoose');
const route = require('./Routes/userRoute');
const app = express();

// middlewares

app.use(express.json())

// connection

const conn_string = process.env.MONGO_DB
mongoose.connect(conn_string)
.then(()=>{
    app.listen('2400',()=>{
        console.log('i am listening');
        console.log('database connected successfully')
    })
})
.catch((err)=>{
    console.log(err);
})

// Routes

app.use(route)
