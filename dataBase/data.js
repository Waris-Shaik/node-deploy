const mongose = require('mongoose');

function connectDB() {
    mongose.connect(process.env.MONGO_URL, {
        dbName: 'ecommerce'
    }).then(() => {
        console.log('Databse Connected Successfully');
    }).catch((e) => {
        console.log('Error Connecting Database', e);
    })
}


module.exports = connectDB;

// mongodb+srv://CODER_DOST:<password>@cluster0.vjt8hfc.mongodb.net/?retryWrites=true&w=majority