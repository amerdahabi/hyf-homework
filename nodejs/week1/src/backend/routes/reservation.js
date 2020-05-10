const reservationArray = require("../data/reservations.json");

const response = function(request, response) {
  const random = Math.floor(Math.random() * reservationArray.length);
  response.json(reservationArray[random]);
};

module.exports = response;