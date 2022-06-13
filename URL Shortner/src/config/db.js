const mongoose = require("mongoose");

const conncet = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/urlshortner");
};

module.exports = conncet;
