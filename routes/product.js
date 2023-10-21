const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');



router.get('/', productController.getProducts);
router.post('/new', productController.createProduct);
router.route('/:id').get(productController.getProductById).put(productController.replaceProduct).patch(productController.updateProduct).delete(productController.deleteProduct);


exports.router = router;