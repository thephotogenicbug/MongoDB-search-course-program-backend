const asyncHandler = require("express-async-handler");
const Programs = require("../models/programs");

const createPrograms = asyncHandler(async (req, res) => {
  const { checked, label } = req.body;

  if (!checked || !label) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const program = new Programs({
      checked,
      label,
    });
    const createdProgram = await program.save();
    res.status(201).json(createdProgram);
  }
});

const getPrograms = asyncHandler(async (req, res) => {
  const programs = await Programs.find();
  res.json(programs);
});

module.exports = { createPrograms, getPrograms };
