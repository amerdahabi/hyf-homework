const reservationArray = require("../data/reservations.json");
const express = require("express");
const router = express.Router();

const reservationRoute = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  if (id) {
    const reservationId = reservationArray.filter(item => item.id === id);
    res.json(reservationId);
  } else {
    res.json(reservationArray);
  }
};

router.get("/", reservationRoute);
router.get("/:id", reservationRoute);

module.exports = router;
