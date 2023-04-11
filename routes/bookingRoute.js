import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
  addNewBook,
  getBookingsByUser,
  processPayment,
} from "../controllers/bookingController.js";

const router = express.Router();

router.use(checkAuth);

router
  .post("/payment", processPayment)
  .post("/new-book", addNewBook)
  .get("/get-bookings-by-user", getBookingsByUser);

export { router as bookingRouter };
