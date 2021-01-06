import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./db";

import { userRouter } from "./routes/user";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const runApp = async (PORT: number | string) => {
  const db = await sequelize.sync({ force: true });

  app.use("/api/users", userRouter(db));

  app.get("/", (_req, res) => {
    res.send("hello server");
  });

  app.listen(PORT, () => {
    console.log(`server run on port ${PORT} !!`);
  });
};

export { runApp };
