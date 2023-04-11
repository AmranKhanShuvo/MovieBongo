import Stripe from "stripe";
import { v4 } from "uuid";
import Bookings from "../models/bookingModel.js";
import Shows from "../models/showModel.js";

export const processPayment = async (req, res, next) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { token, amount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const charge = await stripe.charges.create(
      {
        amount,
        currency: "usd",
        customer: customer.id,
        receipt_email: customer.email,
        description: "Purchase successfull",
      },
      {
        idempotencyKey: v4(),
      }
    );
    res.json({
      success: true,
      message: "Payment successfull",
      data: charge.id,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addNewBook = async (req, res, next) => {
  try {
    const newBook = new Bookings(req.body);
    await newBook.save();

    const show = await Shows.findById(req.body.show);
    await Shows.findByIdAndUpdate(
      req.body.show,
      {
        $push: { bookedSeats: { $each: req.body.seats } },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Successfully booked.",
      data: newBook,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBookingsByUser = async (req, res, next) => {
  try {
    const bookings = await Bookings.find({ user: req.userData.userId })
      .populate("show")
      .populate("user")
      .populate({
        path: "show",
        populate: {
          path: "movieId",
          model: "Movie",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatreId",
          model: "Theatre",
        },
      });
    res.json({
      success: true,
      message: "Successfully fetched.",
      data: bookings,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
