const express = require('express');
const Data = require('./Data.js')
const mongoose = require('mongoose');
const { users } = require('./Data.js');
const  userRouter  = require('./routers/userRouter.js');
const route = require('./routers/userRouter.js');

const app = express();

mongoose.connect('mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.get('/api/products/:id',(req,res) => {
    const product = Data.products.find(x => x._id === req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({
            message: 'Product not found'
        })
    }
})

app.get('/api/products', (req,res) => {
    res.send(Data.products)
})

app.use('/api/users',userRouter)

app.get('/',(req,res) => {
    res.send('Server is ready')
});
const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log("Server running at 5000")
});