const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  university: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  entryrequirement: {
    type: String,
    required: true,
  },
  applicationdeadline: {
    type: String,
    required: true,
  },
  applicationfee: {
    type: String,
    required: true,
  },
   price: {
    type: String,
    required: true,
  },
  scholarshipavailable: {
    type: String,
    required: true,
  },
  scholarshipdetails: {
    type: String,
    required: true,
  },
  applicationmode: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});
const Courses = mongoose.model("Courses", courseSchema);

module.exports = Courses;
