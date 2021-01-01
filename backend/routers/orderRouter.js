const express =  require('express');
const isAuth =  require('../utils.js')
const expressAsyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

const orderRouter = express.Router()

orderRouter.post('/',isAuth,expressAsyncHandler(async(req,res) => {
    if(req.body.orderItems.length === 0) {
        res.status(400).send({message: 'Cart is empty'})
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemPrice: req.body.itemPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        })
        const createOrder = await order.save()
        res.status(201).send({message: 'New Order created', order: createOrder})
    }
}))

module.exports = orderRouter