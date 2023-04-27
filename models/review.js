const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

reviewSchema.post("save", handleMongooseError);

const Review = model("review", reviewSchema);

module.exports = Review;
