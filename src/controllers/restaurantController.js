const { addRestaurant, getRestaurants } = require('../services/restaurantService');

const getRestaurantsEndpoint = async(req, res) => {
    const restaurants = await getRestaurants()

    return res.json(restaurants)
};

const addRestaurantEndpoint = async(req, res) => {
    const { name, category, address } = req.body;

    const restaurant = await addRestaurant({
        name,
        category,
        address,
        active: true
    })

    return res.status(201).json(restaurant);
};

module.exports = { 
    getRestaurantsEndpoint, 
    addRestaurantEndpoint 
};