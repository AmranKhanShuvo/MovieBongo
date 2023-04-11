import mongoose from "mongoose";

const theatreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Theatres = mongoose.model("Theatre", theatreSchema);

export default Theatres;
