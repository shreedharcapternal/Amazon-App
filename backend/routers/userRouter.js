const express = require('express')
const User =  require('../models/userModel')
const data = require('../Data')

const userRouter = express.Router()

const route = userRouter.get('/seed', async(req,res) => {
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers })
})

module.exports = route