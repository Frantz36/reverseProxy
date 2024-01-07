import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Utils/DbConnection.js";


import AuthRoute from "./Routes/AuthenticationRoutes.js";
import urlGenerationRoutes from "./Routes/UrlGeneraionRoute.js"

dotenv.config();

connectDB();
const app = express();
app.set("trust proxy", 1);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: true }));

app.use(express.json({ limit: "4mb" }));

//usage of routes
app.use("/api/auth", AuthRoute);
app.use("/api/generate-url",urlGenerationRoutes);
app.use("/test",()=>{
  console.log("Bonjour")
});
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

app.listen(process.env.PORT_NUMBER || 5000, () => {
  console.log("Listening!");
  console.log(process.env.PORT_NUMBER);
});
