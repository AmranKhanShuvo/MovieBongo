import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
  getAll,
  getAllByOwner,
  addNew,
  updateOne,
  deleteOne,
} from "../controllers/theatreController.js";

const router = express.Router();

router.use(checkAuth);

router
  .post("/getAllByOwner", getAllByOwner)
  .get("/getAll", getAll)
  .post("/addNew", addNew)
  .patch("/updateOne", updateOne)
  .post("/deleteOne", deleteOne);

export { router as theatreRouter };
