import Theatres from "../models/theatreModel.js";

export const getAll = async (req, res, next) => {
  try {
    const theatres = await Theatres.find().populate("owner").sort({
      createdAt: -1,
    });
    res.json({ success: true, message: "Successfully fetched.", theatres });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllByOwner = async (req, res, next) => {
  try {
    const theatres = await Theatres.find({ owner: req.body.owner }).sort({
      createdAt: -1,
    });
    res.json({ success: true, message: "Successfully fetched.", theatres });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addNew = async (req, res, next) => {
  try {
    const newTheatre = new Theatres(req.body);
    await newTheatre.save();

    res.json({ success: true, message: "Successfully added." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateOne = async (req, res, next) => {
  try {
    await Theatres.findByIdAndUpdate(req.body.theatreId, req.body);
    res.json({ success: true, message: "Successfully updated." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    await Theatres.findByIdAndDelete(req.body.theatreId);
    res.json({ success: true, message: "Successfully deleted." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
