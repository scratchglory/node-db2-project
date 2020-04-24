const express = require("express");
const db = require("../data/config");
const router = express.Router();

// const knex = require("knex")
// const db = knex({
//     client: sqlite3,
//     useNullAsDefault: true,
//     connection: {
//         filename: "../data/cars.db3"
//     }
// })

// '/cars'
router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id });

    res.json(car);
  } catch (err) {
    next(err);
  }
});

// Create
router.post("/", async (req, res, next) => {
  try {
    const carsData = req.body;
    const [id] = await db("cars").insert(carsData);
    const newCar = await db("cars").where({ id });

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
