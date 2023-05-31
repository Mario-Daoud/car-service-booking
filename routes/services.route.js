const express = require("express");
const router = express.Router();
const { Service } = require("../models/service.model");

router.get("/", async (req, res, next) => {
  try {
    const services = await Service.find().sort("name");
    res.send(services);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service)
      return res
        .status(404)
        .send("The service with the given ID was not found.");
    res.send(service);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
