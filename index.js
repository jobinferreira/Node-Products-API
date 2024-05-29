const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/product.route.js')
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes
app.use("/api/products", router)


mongoose.connect('mongodb+srv://admin:root@nodeproductapi.fcqnslr.mongodb.net/Node-Products-API?retryWrites=true&w=majority&appName=NodeProductApi')
.then(() => {
    console.log('Connected to the database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
.catch(() => console.log('Connection failed'))