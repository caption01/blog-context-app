import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";

import { sequelize } from "./db";

import { errorHandler } from "./middlewares/errorHandler";

import { userRouter } from "./routes/user";
import { signInRouter } from "./routes/signin";
import { signUpRouter } from "./routes/signup";
import { articleRouter } from "./routes/articles";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "asdasd",
  })
);

const runApp = async (PORT: number | string) => {
  try {
    await sequelize.sync({ force: true });
    console.log("connected to DB");
  } catch (err) {
    console.log("cant connect to DB", err);
  }

  app.use("/api/signin", signInRouter);
  app.use("/api/signup", signUpRouter);
  app.use("/api/currentUser", userRouter);
  app.use("/api/article", articleRouter);
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
