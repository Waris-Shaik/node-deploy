const express = require('express');
const server = express();
const productRouter = require('./routes/product');  // router
require('dotenv').config(); // dotenv file
const connectDB = require('./dataBase/data');  // dataBase file
const cors = require('cors');  // cors 

server.use(cors());


// connecting dataBase 
connectDB();

// middlewares
server.use(express.json());
server.use('/api/v1/products',productRouter.router);
server.use(express.static(process.env.PUBLIC_DIR));
server.use('*', (req, res)=>{
    res.sendFile(__dirname + '/build/index.html');
})
 


// listening port connection
server.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});

