const { Router } = require('express');
const { addOrderEndpoint, getOrdersEndpoint } = require('../controllers/orderController');

const orderRouter = Router();

//TODO: Add order endpoints

module.exports = { orderRouter };