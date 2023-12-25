const mongoose = require('mongoose')

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
  pay: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  acceptedBy: {
    type: String,
    required: false
  },
  location:{
    type:Object
  }
});

module.exports = mongoose.model('Request', RequestSchema)