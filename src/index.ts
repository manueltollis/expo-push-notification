/**
 * This file contains the main server code for the Expo push notification service.
 * @packageDocumentation
 */

import express from "express";
import userRouter from "./routes/user";
import pushRouter from "./routes/push";

console.log("Creating app");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/users", userRouter);
app.use("/push", pushRouter);

/**
 * Responds with "Hello World!" when the root URL is requested
 * @param req - The request object
 * @param res - The response object
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Starts the server on port 3000
 */
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
