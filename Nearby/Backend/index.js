const express = require("express");
const app = express();

const connect = require("./src/config/db");
app.use(express.json());

const restaurantcontroller = require("./src/controller/restaurant.controller");
app.use("/resturant", restaurantcontroller);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
