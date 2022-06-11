const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userschema);
module.exports = User;
