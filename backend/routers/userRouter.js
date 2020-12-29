const express =   require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data.js');
const User = require('../models/userModel.js');

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);
module.exports = userRouter

// const express = require('express')
// const User =  require('../models/userModel')
// const data = require('../Data')

// const userRouter = express.Router()

// userRouter.get('/seed', async (req,res) => {
//     const createdUsers = await User.insertMany(data.users)
//     res.send({ createdUsers })
// })

// module.exports = userRouter
