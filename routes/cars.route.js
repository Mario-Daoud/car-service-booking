const express = require("express");
const router = express.Router();
const { Car, validate } = require("../models/car.model");
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.find().sort("name");
    res.send(cars);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid car ID.");
  }

  try {
    const car = await Car.findById(id);
    if (!car)
      return res.status(404).send("The car with the given ID was not found.");
    res.send(car);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const car = new Car({
      name: req.body.name,
      model: req.body.model,
      buildYear: req.body.buildYear,
      price: req.body.price,
    });
    await car.save();
    res.send(car);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        model: req.body.model,
        buildYear: req.body.buildYear,
        price: req.body.price,
      },
      { new: true }
    );

    if (!car)
      return res.status(404).send("The car with the given ID was not found.");

    res.send(car);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const car = await Car.findByIdAndRemove(req.params.id);
    if (!car)
      return res.status(404).send("The car with the given ID was not found.");
    res.send(car);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
