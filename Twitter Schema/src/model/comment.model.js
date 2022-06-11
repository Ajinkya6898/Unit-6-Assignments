const mongoose = require("mongoose");

const commentschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    comment: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const comment = mongoose.model("comment", commentschema);
module.exports = comment;
