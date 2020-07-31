const reviewsArray = require("../data/reviews.json");
const express = require("express");
const router = express.Router();

const reviewsRoute = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  const reviewId = reviewsArray.filter(item => item.id === id);

  if (req.originalUrl === "/reviews") {
    res.json(reviewsArray);
  } else if (id) {
    if (reviewId.length === 0) {
      res.send("Review not found");
    } else {
      res.json(reviewId);
    }
  } else {
    res.send("Parameter not found");
  }
};

router.get("/", reviewsRoute);
router.get("/:id", reviewsRoute);

module.exports = router;
