//exemple de controlleur pour model product

let Product = require('../models/product')

exports.index = function (req, res) {
    Product.getAll(function (products) {
        res.render('index', { products: products })
    })
}