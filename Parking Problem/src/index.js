const express = require("express");
const app = express();
const connect = require("./configs/db");

const usercontroller = require("./controller/user-controller");
app.get("/", usercontroller);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err);
  }
});
