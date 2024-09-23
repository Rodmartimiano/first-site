import express from "express";
import cors from "cors";
import heroBannerController from "./controllers/heroBannerController";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 3000;

app.post("/hero-data", heroBannerController);

// TODO more apis
// app.get("/features-data", featuresDataController);

app.listen(port, () => {
  console.log("Server up and running at port " + port);
});
