const express =  require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');
const Product = require('../models/productModel');

const productRouter = express.Router()


productRouter.get('/', expressAsyncHandler(async (req,res) => {
    const products = await Product.find({})
    res.send(products)
}))

productRouter.get('/seed', expressAsyncHandler(async(req,res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts })
}))

productRouter.get('/:id', expressAsyncHandler(async(req,res) => {
    const products = await Product.findById(req.params.id)
    if(products) {
        res.send(products)
    } else {
        res.status(404).send({message: 'Product Not Found'})
    }
}))

module.exports = productRouter