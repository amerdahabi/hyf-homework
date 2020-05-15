const mealArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const cheapMeal = function(request, response) {
  
  const mealReview = mealArray.map(item => {
    item.review = reviewsArray.filter(itemReview => itemReview.mealId === item.id)
    return item;
  })
  const result = mealReview.filter(item => item.price < 40)

  response.json(result);
};

module.exports = cheapMeal;

