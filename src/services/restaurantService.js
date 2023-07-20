const { insertQuery, selectQuery } = require('../config/configDB');

const getRestaurants = async() => {
    const query = `SELECT * FROM Restaurants`;
    const restaurants = await selectQuery(query);

    return restaurants;
};

const addRestaurant = async(restaurant) => {
    const query = `
    INSERT INTO Restaurants (name, category, address, active)
    VALUES ('${restaurant.name}', '${restaurant.category}', '${restaurant.address}', '${restaurant.active}')
    `;

    await insertQuery(query)
    
    return restaurant;
};

module.exports = {
    getRestaurants,
    addRestaurant
};