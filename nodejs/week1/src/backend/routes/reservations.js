const reservationArray = require("../data/reservations.json");

 const response = function(request, response){
    response.json(reservationArray)
 }
 module.exports = response;
 