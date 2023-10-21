const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data.json'), 'utf-8'));
const products = data;
const model = require('../models/product');
const Product = model.Product;







// middleware 
const isAuthenticated = ((req, res, next) => {
    const { key } = req.query;
    console.log(key)
    if (Number(key) === 1234) {
        console.log(new Date());
        next();
    } else {
        res.status(404).send("Unauthorized");
    }
})




// create Product
exports.createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(201).json({ success: true, msg: "successfully created product.. ✅" });

    } catch (error) {
        res.status(500).json({ success: false, error });
    }

}


// get Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, products });

    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}

// get Product By Id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}


// update Product
exports.updateProduct = async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json({ success: true, msg: "Updated Successfully.. ✅" });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}


// replace Product
exports.replaceProduct = async (req, res) => {
    try {
        await Product.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
        res.json({ success: true, msg: "Replaced Successfully.. ✅" });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}


//  delete Product                                                     
exports.deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.json({ success: true, msg: "successfully deleted.. ✅" });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}
