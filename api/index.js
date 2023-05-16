import express from "express";
import mongoose from "mongoose";
import productRoute from "./routers/product.js";
import orderRoute from "./routers/order.js";
import authRoute from "./routers/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to DB successfully");
  } catch (err) {
    throw err;
  }   
};

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  connect();
  console.log("Server is running!!!");
});
