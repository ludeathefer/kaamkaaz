const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: [true, "Description required"],
  },
  createdBy: {
    type: String,
    required: true,
  },
  category:{
    type: String,
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
