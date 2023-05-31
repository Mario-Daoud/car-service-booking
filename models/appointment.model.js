const Joi = require("joi");
const mongoose = require("mongoose");

const Appointment = mongoose.model(
  "appointments",
  new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customers",
      required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "services",
      required: true,
    },
  })
);

function validateAppointment(appointment) {
  const schema = Joi.object({
    customerId: Joi.objectId().required(),
    carId: Joi.objectId().required(),
    date: Joi.date().required(),
    serviceId: Joi.objectId().required(),
  });

  return schema.validate(appointment);
}

exports.Appointment = Appointment;
exports.validate = validateAppointment;
