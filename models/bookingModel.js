import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    show: { type: mongoose.Types.ObjectId, ref: "Show" },
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    seats: { type: Array, required: true },
    transactionId: { type: String, required: true },
  },
  { timestamps: true }
);

const Bookings = mongoose.model("Booking", bookingSchema);

export default Bookings;
