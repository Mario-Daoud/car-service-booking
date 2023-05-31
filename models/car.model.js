const Joi = require("joi");
const mongoose = require("mongoose");

const Car = mongoose.model(
  "cars",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    model: {
      type: String,
      required: true,
      maxlength: 50,
    },
    buildYear: {
      type: Number,
      required: true,
      min: 1900,
      max: 2023,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  })
);

function validateCar(car) {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    model: Joi.string().max(50).required(),
    buildYear: Joi.number().min(1900).max(2023).required(),
    price: Joi.number().min(0).required(),
  });

  return schema.validate(car);
}

exports.Car = Car;
exports.validate = validateCar;
