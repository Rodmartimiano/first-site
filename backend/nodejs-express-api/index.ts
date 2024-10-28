import express from "express";
import cors from "cors";
import heroBannerController from "./controllers/heroBannerController";
import featuresBannerController from "./controllers/featuresBannerController";
import TransactionsBannerController from "./controllers/TransactionsController";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3450",
  })
);

const port = 3490;

app.get("/dummy", (req, res) => res.send("dummy"));
app.post("/hero-data", heroBannerController);
app.post("/features-data", featuresBannerController);
app.post("/transactions-data", TransactionsBannerController);

// TODO more apis
// app.get("/features-data", featuresDataController);

app.listen(port, "0.0.0.0", () => {
  console.log("Server up and running at port " + port);
});
