const { Router } = require('express');
const { addRestaurantEndpoint, getRestaurantsEndpoint } = require('../controllers/restaurantController');

const restaurantRouter = Router();

restaurantRouter.post('/restaurants', addRestaurantEndpoint)
restaurantRouter.get("/restaurants", getRestaurantsEndpoint);

module.exports = { restaurantRouter };