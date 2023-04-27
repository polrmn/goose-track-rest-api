const ctrlWrapper = require("../utils/ctrlWrapper");
const Review = require("../models/review");

const getAll = async (req, res) => {
  const result = await Review.find();
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
