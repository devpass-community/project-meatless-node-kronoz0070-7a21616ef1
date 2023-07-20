const { Router } = require('express');
const { addRestaurantEndpoint, getRestaurantsEndpoint } = require('../controllers/restaurantController');

const restaurantRouter = Router();

restaurantRouter.post('/restaurant', addRestaurantEndpoint)
restaurantRouter.get("/restaurant", getRestaurantsEndpoint);

module.exports = { restaurantRouter };