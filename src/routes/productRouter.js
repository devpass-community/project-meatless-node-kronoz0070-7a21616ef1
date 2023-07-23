const { Router } = require("express");
const {
  addProductEndpoint,
  getProductsEndpoint,
} = require("../controllers/productController");

const productRouter = Router();

productRouter.post("/product/:restaurantId", addProductEndpoint);
productRouter.get("/product/:restaurantId", getProductsEndpoint);

module.exports = { productRouter };
