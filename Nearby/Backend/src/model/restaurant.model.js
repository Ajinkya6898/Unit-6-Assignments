const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true },
    mobileNo: { type: Number, required: true },
    img: { type: String, required: true },
    rating: { type: Number, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Resturant = mongoose.model("resturant", restaurantSchema);
module.exports = Resturant;
