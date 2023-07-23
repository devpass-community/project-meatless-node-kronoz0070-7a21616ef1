const { BadRequestError } = require("../utils/helpers/error-helper");
const {
  createRepository,
  findByIdRepository,
  findByKeyRepository,
} = require("../database/repositories");

const { insertQuery, selectQuery } = require("../config/configDB");

const getProducts = async (id) => {
  const query = findByKeyRepository("Products", "restaurant_id", id);
  
  const queryExistsRestaurants = findByIdRepository("Restaurants", id);
  const checkExistsRestaurants = await selectQuery(queryExistsRestaurants);

  if (!checkExistsRestaurants.length) {
    throw new BadRequestError("Restaurant not found");
  }

  const products = await selectQuery(query);

  return products;
};

const addProduct = async (product) => {
  const queryExistsRestaurants = findByIdRepository(
    "Restaurants",
    product.restaurant_id
  );

  const query = createRepository("Products", product);

  const checkExistsRestaurants = await selectQuery(queryExistsRestaurants);

  if (!checkExistsRestaurants.length) {
    throw new BadRequestError("Restaurant not found");
  }

  await insertQuery(query);

  return product;
};

module.exports = {
  getProducts,
  addProduct,
};
