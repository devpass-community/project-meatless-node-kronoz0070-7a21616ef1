const express = require('express')
const cors = require('cors')
const { productRouter } = require('./routes/productRouter')
const { restaurantRouter } = require('./routes/restaurantRouter')
const { shipmentRouter } = require('./routes/shipmentRouter')
const { userRouter } = require('./routes/userRouter')
const { orderRouter } = require('./routes/orderRouter')

const port = 3000

const app = express();
app.use(express.json());
app.use(cors());

app.use(productRouter);
app.use(restaurantRouter);
app.use(shipmentRouter);
app.use(userRouter);
app.use(orderRouter);

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`)
})