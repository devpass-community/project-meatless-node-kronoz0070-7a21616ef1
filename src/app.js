require("express-async-errors");
const AppError = require("./utils/errors/AppError");
const express = require("express");
const cors = require("cors");
const { productRouter } = require("./routes/productRouter");
const { restaurantRouter } = require("./routes/restaurantRouter");
const { shipmentRouter } = require("./routes/shipmentRouter");
const { userRouter } = require("./routes/userRouter");
const { orderRouter } = require("./routes/orderRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use(productRouter);
app.use(restaurantRouter);
app.use(shipmentRouter);
app.use(userRouter);
app.use(orderRouter);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
