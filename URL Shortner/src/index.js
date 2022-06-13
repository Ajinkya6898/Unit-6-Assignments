const express = require("express");
const app = express();
const connect = require("./config/db");
const URL = require("./model/url.model");

app.get("/", async (req, res) => {
  const shorturl = await URl.find();
  res.send({ URL });
});

app.post("/shorturl", async (req, res) => {
  await URL.create(req.body);
});

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
