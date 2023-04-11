import Shows from "../models/showModel.js";

export const addNewShow = async (req, res, next) => {
  try {
    const newShow = new Shows(req.body);
    await newShow.save();
    res.json({ success: true, message: "Successfully added." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllByTheatreId = async (req, res, next) => {
  try {
    const shows = await Shows.find({ theatreId: req.body.theatreId }).populate(
      "movieId"
    );
    res.json({ success: true, message: "Successfully fetched.", shows });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteOneShow = async (req, res, next) => {
  try {
    await Shows.findByIdAndDelete(req.body.showId);
    res.json({ success: true, message: "Successfully deleted." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getTheatresForMovieId = async (req, res, next) => {
  try {
    const { date, id } = req.body;
    const shows = await Shows.find({ date, movieId: id })
      .populate("theatreId")
      .sort({ createdAt: -1 });

    let uniqueTheatres = [];
    shows.forEach((show) => {
      const theatre = uniqueTheatres.find((theatre) => {
        return theatre._id == show.theatreId._id;
      });

      if (!theatre) {
        const showsForThisTheatre = shows.filter((showObj) => {
          return showObj.theatreId._id == show.theatreId._id;
        });
        uniqueTheatres.push({
          ...show.theatreId._doc,
          shows: showsForThisTheatre,
        });
      }
    });

    res.json({
      success: true,
      message: "Successfully fetched.",
      data: uniqueTheatres,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getShowById = async (req, res, next) => {
  try {
    const show = await Shows.findById(req.body.showId)
      .populate("movieId")
      .populate("theatreId");
    res.json({ success: true, message: "Successfully fetched.", data: show });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
