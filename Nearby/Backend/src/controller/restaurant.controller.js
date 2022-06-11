const express = require("express");
const router = express.Router();
const Resturant = require("../model/restaurant.model");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Resturant.find().lean().exec();
    return res.status(200).send(restaurants);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const restaurant = await Resturant.create(req.body);
    return res.status(201).send(restaurant);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const restaurant = await Resturant.findById(req.params.id);
    return res.status(200).send(restaurant);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const restaurant = await Resturant.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.status(200).send(restaurant);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

module.exports = router;
