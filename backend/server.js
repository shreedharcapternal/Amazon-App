const express = require('express');
const Data = require('./Data.js')
const mongoose = require('mongoose');
const { users } = require('./Data.js');
const  userRouter  = require('./routers/userRouter.js');


const app = express();
const connection = mongoose.connection;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

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

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log("Server running at 5000")
});