const express = require("express");
const router = express.Router();
const { Appointment, validate } = require("../models/appointment.model");
const { Service } = require("../models/service.model");
const { Car } = require("../models/car.model");
const { Customer } = require("../models/customer.model");
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const appointments = await Appointment.find()
      .sort("date")
      .populate("customer car service");
    res.send(appointments);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid appointment ID.");
  }

  try {
    const appointment = await Appointment.findById(id).populate(
      "customer car service"
    );
    if (!appointment)
      return res
        .status(404)
        .send("The appointment with the given ID was not found.");
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const car = await Car.findById(req.body.carId);
    if (!car) return res.status(400).send("Invalid car.");

    const service = await Service.findById(req.body.serviceId);
    if (!service) return res.status(400).send("Invalid service.");

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send("Invalid customer.");

    const appointment = new Appointment({
      customer: customer,
      car: car,
      date: req.body.date,
      service: service,
    });
    await appointment.save();
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        customer: req.body.customer,
        car: req.body.car,
        date: req.body.date,
        service: req.body.service,
      },
      { new: true }
    ).populate("customer car service");

    if (!appointment)
      return res
        .status(404)
        .send("The appointment with the given ID was not found.");

    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndRemove(
      req.params.id
    ).populate("customer car service");
    if (!appointment)
      return res
        .status(404)
        .send("The appointment with the given ID was not found.");
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
