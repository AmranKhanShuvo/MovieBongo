import express from "express";
import {
  addNewShow,
  deleteOneShow,
  getAllByTheatreId,
  getShowById,
  getTheatresForMovieId,
} from "../controllers/showController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.use(checkAuth);

router
  .post("/addNew", addNewShow)
  .post("/get-all-by-theatreid", getAllByTheatreId)
  .post("/deleteOne", deleteOneShow)
  .post("/get-theatres-by-movieid", getTheatresForMovieId)
  .post("/get-show-by-id", getShowById);

export { router as showRouter };
