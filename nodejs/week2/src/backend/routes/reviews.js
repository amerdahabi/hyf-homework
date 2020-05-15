const reviewsArray = require("../data/reviews.json");
const express = require("express");
const router = express.Router();

const reviewsRoute = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  if (id) {
    const reviewId = reviewsArray.filter(item => item.id === id);
    res.json(reviewId);
  } else {
    res.json(reviewsArray);
  }
};

router.get("/", reviewsRoute);
router.get("/:id", reviewsRoute);

module.exports = router;
