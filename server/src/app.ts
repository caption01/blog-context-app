import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./db";

import { errorHandler } from "./middlewares/errorHandler";

import { userRouter } from "./routes/user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const runApp = async (PORT: number | string) => {
  try {
    await sequelize.sync({ force: true });
    console.log("connected to DB");
  } catch (err) {
    console.log("cant connect to DB", err);
  }

  app.use("/api/signin", signInRouter);
  app.use("/api/signout", signOutRouter);
  app.use("/api/currentUser", userRouter);
  // app.use("/api/articles", "");
  // app.use("/api/clips", "");

  app.get("/", (_req, res) => {
    res.send("hello server");
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`server run on port ${PORT} !!`);
  });
};

export { runApp };
