const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const perms = require("../middleware/perms");

const { Customer, validate } = require("../models/customer.model");

router.get("/", async (req, res, next) => {
  try {
    const customers = await Customer.find().sort("name");
    res.send(customers);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer)
      return res
        .status(404)
        .send("The customer with the given ID was not found.");
    res.send(customer);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = await Customer.findOne({ email: req.body.email });
    if (customer) return res.status(400).send("Customer already registered.");

    customer = new Customer(
      _.pick(req.body, ["firstName", "lastName", "email", "password"])
    );
    const salt = await bcrypt.genSalt(10);
    customer.password = await bcrypt.hash(customer.password, salt);

    await customer.save();

    const token = customer.generateAuthToken();
    res
      .header("x-auth-token", token)
      .send(_.pick(customer, ["_id", "firstName", "lastName", "email"]));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      },
      { new: true }
    );

    if (!customer)
      return res
        .status(404)
        .send("The customer with the given ID was not found.");

    res.send(customer);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", [auth, perms], async (req, res, next) => {
  try {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer)
      return res
        .status(404)
        .send("The customer with the given ID was not found.");
    res.send(customer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
