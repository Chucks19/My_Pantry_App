const express = require('express')
const { signup_post, login_post } = require('../Controllers/userController')


const route = express.Router()

route.post('/signup',signup_post)

route.post('/login',login_post)

module.exports = route;