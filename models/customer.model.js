const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  hasPermission: Boolean,
});

customerSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign(
      { _id: this._id, hasPermission: this.hasPermission },
      process.env.jwtPrivateKey
    );
    return token;
  } catch (error) {
    next(error);
  }
};

const Customer = mongoose.model("customers", customerSchema);

function validateCustomer(customer) {
  const schema = Joi.object({
    firstName: Joi.string().max(50).required(),
    lastName: Joi.string().max(50).required(),
    email: Joi.string().max(50).email().required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
