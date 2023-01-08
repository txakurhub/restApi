import Program from "../models/Program";

export const getPrograms = async (req, res) => {
  const Programs = await Program.find();
  res.json(Programs);
};
export const getProgramById = async (req, res) => {
  const Program = await Program.findById(req.params.programId);
  res.json(Program);
};

export const createProgram = async (req, res) => {
  const { name, date, description, imgUrl } = req.body;

  const newProgram = new Program({
    name,
    date,
    description,
    imgUrl,
  });

  const ProgramSaved = await newProgram.save();
  res.status(201).json(newProgram);
};

export const updateProgramById = async (req, res) => {
  const updatedProgram = await Program.findByIdAndUpdate(
    req.params.programId,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProgram);
};

export const deleteProgramById = async (req, res) => {
  await Program.findByIdAndDelete(req.params.programId);
  res.status(200).json("Program deleted.");
};
