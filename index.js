const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const mongoose = require("mongoose");

require("dotenv").config();

if (!process.env.jwtPrivateKey) {
  console.error("ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

const cars = require("./Routes/cars.route");
const customers = require("./Routes/customers.route");
const appointments = require("./Routes/appointments.route");
const services = require("./Routes/services.route");
const auth = require("./Routes/auth.route");

const express = require("express");
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/cars", cars);
app.use("/api/customers", customers);
app.use("/api/appointments", appointments);
app.use("/api/services", services);
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Welcome to the Car Service API");
});

app.use((error, res) => {
  console.log(error);
  const statusCode = error.statusCode;
  res.status(statusCode).json({
    error: {
      message: error.message || "Internal Server Error",
    },
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;
