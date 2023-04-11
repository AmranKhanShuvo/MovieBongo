import express from "express";
import mongoose from "mongoose";
import { movieRouter } from "./routes/moviesRoute.js";
import { userRouter } from "./routes/usersRoute.js";
import { theatreRouter } from "./routes/theatresRoute.js";
import { showRouter } from "./routes/showRoute.js";
import { bookingRouter } from "./routes/bookingRoute.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );

//   next();
// });

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mycluster01.pijmioj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB server connected.");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend server connected.");
    });
  })
  .catch((err) => {
    console.log(err);
  });
