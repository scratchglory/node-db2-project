const express = require("express");
const carsRouter = require("./cars/cars-router.js");

const server = express();
const port = 5000;

server.use(express.json());
// Welcome
// server.use("/", (req, res) => {
//   res.status(200).json({ message: "TO THE WORLD OF CARS" });
// });
server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "ERROR ERROR" });
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
