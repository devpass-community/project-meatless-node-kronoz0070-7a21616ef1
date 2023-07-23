const { addProduct, getProducts } = require("../services/productService");
const { MissingParamError } = require("../utils/helpers/error-helper");

const getProductsEndpoint = async (req, res) => {
  const { restaurantId } = req.params;
  const products = await getProducts(restaurantId);

  return res.json(products);
};

const addProductEndpoint = async (req, res) => {
  const { restaurantId } = req.params;
  const { description, full_description, category, price } = req.body;

  const requiredFields = [
    "description",
    "full_description",
    "category",
    "price",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      throw new MissingParamError(field);
    }
  }

  const product = await addProduct({
    description,
    full_description,
    category,
    price,
    restaurant_id: restaurantId,
    active: true,
  });

  return res.status(201).json(product);
};

module.exports = {
  getProductsEndpoint,
  addProductEndpoint,
};
