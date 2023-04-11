import express from "express";
import {
  addNewMovie,
  deleteOneMovie,
  getAllMovie,
  getMovieById,
  updateMovie,
} from "../controllers/movieController.js";
import checkAuth from "../middleware/checkAuth.js";
const router = express.Router();

router.use(checkAuth);

router
  .post("/addMovie", addNewMovie)
  .get("/getAllMovie", getAllMovie)
  .post("/deleteOneMovie", deleteOneMovie) //delete method doesn't work.
  .patch("/updateMovie", updateMovie)
  .post("/get-movie-by-id", getMovieById);

export { router as movieRouter };
