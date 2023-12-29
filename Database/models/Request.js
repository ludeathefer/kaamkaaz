const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: 5,
    maxlength: 40,
  },
  desc: {
    type: String,
    required: [true, "Description required"],
  },
  createdBy: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  requestedTo: {
    type: String,
    required: false,
  },
  acceptedBy: {
    type: String,
    required: false,
  },
  location: {
    type: Object,
    required: false,
  },
  selectedServices: {
    type: [String],
  },
  dueDate: {
    type: String,
  },
});

module.exports = mongoose.model("Request", RequestSchema);
