import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    showTitle: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    movieId: { type: mongoose.Types.ObjectId, ref: "Movie", required: true },
    ticketPrice: { type: Number, required: true },
    totalSeats: { type: Number, required: true },
    bookedSeats: { type: Array, default: [] },
    theatreId: {
      type: mongoose.Types.ObjectId,
      ref: "Theatre",
      required: true,
    },
  },
  { timestamps: true }
);

const Shows = mongoose.model("Show", showSchema);

export default Shows;
