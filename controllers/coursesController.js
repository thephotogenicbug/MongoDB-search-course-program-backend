const asyncHandler = require("express-async-handler");
const Courses = require("../models/course");

const createCourses = asyncHandler(async (req, res) => {
  const {
    university,
    title,
    specialization,
    campus,
    country,
    program,
    duration,
    entryrequirement,
    applicationdeadline,
    applicationfee,
    price,
    scholarshipavailable,
    scholarshipdetails,
    applicationmode,
    remarks,
  } = req.body;

  if (
    !university ||
    !title ||
    !specialization ||
    !campus ||
    !country ||
    !program ||
    !duration ||
    !entryrequirement ||
    !applicationdeadline ||
    !applicationfee ||
    !price ||
    !scholarshipavailable ||
    !scholarshipdetails ||
    !applicationmode ||
    !remarks
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const course = new Courses({
      university,
      title,
      specialization,
      campus,
      country,
      program,
      duration,
      entryrequirement,
      applicationdeadline,
      applicationfee,
      price,
      scholarshipavailable,
      scholarshipdetails,
      applicationmode,
      remarks,
    });
    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  }
});

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Courses.find();
  res.json(courses);
});

module.exports = { createCourses, getCourses };
