exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // truncate does more than .del(), like resetting autincrementing ID
  await knex("cars").truncate();

  await knex("cars").insert([
    { VIN: 1234, make: "BMW", model: "M5 Competition", mileage: "345" },
    { VIN: 8475, make: "Tesla", model: "Model 3", mileage: "987" },
    { VIN: 2398, make: "Audi", model: "Avante", mileage: "1000" },
    { VIN: 90325, make: "Honda", model: "Civic", mileage: "8472" },
  ]);
};
