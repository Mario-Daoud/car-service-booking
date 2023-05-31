const Joi = require("joi");
const mongoose = require("mongoose");

const Service = mongoose.model(
  "services",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      maxlength: 255  ,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  })
);

function validateService(service) {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    description: Joi.string().max(255).required(),
    price: Joi.number().min(0).required(),
  });

  return schema.validate(service);
}

exports.Service = Service;
exports.validate = validateService;
