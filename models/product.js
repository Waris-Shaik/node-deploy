const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    image: { type: String }

})


exports.Product = mongoose.model('Product', productSchema);

