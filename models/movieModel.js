import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    language: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true },
    poster: { type: String, required: true },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movie", movieSchema);

export default Movies;
