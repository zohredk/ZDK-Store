const products = require("../models/products");

const getAllProducts = (req, res, next) => {
  res.json(products);
};

const getProduct = (req, res, next) => {
  const id = req.params.id;
  const product = products.find((item) => item._id === id);

  res.json(product);
};

exports.getAllProducts = getAllProducts;
exports.getProduct = getProduct;
