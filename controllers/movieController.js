import Movies from "../models/movieModel.js";

export const addNewMovie = async (req, res, next) => {
  try {
    const newMovie = new Movies(req.body);
    await newMovie.save();

    res.json({ success: true, message: "Successfully added." });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllMovie = async (req, res, next) => {
  try {
    const movies = await Movies.find().sort({ createdAt: -1 });
    res.json({ success: true, message: "Successfully fetched.", movies });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteOneMovie = async (req, res, next) => {
  try {
    const { movieId } = req.body;

    await Movies.findByIdAndDelete(movieId);

    res.json({ success: true, message: "Successfully deleted." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    await Movies.findByIdAndUpdate(req.body.movieId, req.body);
    res.json({ success: true, message: "Successfully updated." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movies.findById(req.body.id);
    res.json({ success: true, message: "Successfully updated.", movie });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
