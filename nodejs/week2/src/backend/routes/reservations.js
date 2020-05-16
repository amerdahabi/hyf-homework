const reservationArray = require("../data/reservations.json");
const express = require("express");
const router = express.Router();

const reservationRoute = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  const reservationId = reservationArray.filter(item => item.id === id);

  if (req.originalUrl === "/reservations") {
    res.json(reservationArray);
  } else if (id) {
    if (reservationId.length === 0) {
      res.send("Reservation not found");
    } else {
      res.json(reservationId);
    }
  } else {
    res.send("Parameter not found");
  }
};

router.get("/", reservationRoute);
router.get("/:id", reservationRoute);

module.exports = router;
