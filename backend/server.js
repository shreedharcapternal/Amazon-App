const express = require('express');
const Data = require('./Data.js')
const mongoose = require('mongoose');
const users  = require('./Data.js');
const  userRouter  = require('./routers/userRouter.js');
const productRouter = require('./routers/productRouter.js');
const orderRouter = require('./routers/orderRouter.js')
const dotenv = require('dotenv')


dotenv.config()


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))
const connection = mongoose.connection;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// app.get('/api/products/:id',(req,res) => {
//     const product = Data.products.find(x => x._id === req.params.id)
//     if(product) {
//         res.send(product)
//     } else {
//         res.status(404).send({
//             message: 'Product not found'
//         })
//     }
// })


app.use('/api/products',productRouter)
app.use('/api/orders',orderRouter)
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