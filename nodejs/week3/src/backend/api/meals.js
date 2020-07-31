const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

// Get all meals
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// Get meal by ID
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("meals")
      .select("title", "price")
      .where(request.params);
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// Add new meal
router.post("/", async (request, response) => {
  try {
    const addMeal = await knex("meals").insert({
      title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      max_reservation: request.body.max_reservation,
      price: request.body.price,
      created_date: request.body.created_date,
    });
    response.json(addMeal);
  } catch (error) {
    throw error;
  }
});

// Update meal by ID
router.put("/:id", async (request, response) => {
  try {
    const updateMeal = await knex("meals")
      .where({
        id: request.params.id,
      })
      .update({
        title: request.body.title,
        description: request.body.description,
        location: request.body.location,
        max_reservation: request.body.max_reservation,
        price: request.body.price,
        created_date: request.body.created_date,
      });
    response.json(updateMeal);
  } catch (error) {
    throw error;
  }
});

// Delete meal by ID
router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const deleteMeal = await knex("meals")
      .where({
        id: request.params.id,
      })
      .del();
    response.json(`Meal with the ID '${id}' has been deleted`);
  } catch (error) {
    throw error;
  }
});

// router.get("/", async (request, response) => {
//   const maxPriceString = request.query.maxPrice
//   const maxPrice = parseInt(maxPriceString)
//   try{
//     const getMaxPrice = await knex("meals").select("title", "price").where("price", maxPrice);
//     response.json(getMaxPrice)
//   } catch (error){
//     throw error;
//   }
// })

router.get("/", async (request, response) => {
  try {
    const thePrice = await knex("meals")
      .select("title", "price")
      .where({ price: request.query.price });
    response.json(thePrice);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
