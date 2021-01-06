import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./db";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const runApp = async (PORT: number | string) => {
  const db = await sequelize.sync({ force: true });

  const { Users } = db.models;

  app.get("/", (_req, res) => {
    res.send("hello");
  });

  app.get("/user", async (_req, res) => {
    const users = await Users.findAll();
    console.log("query user", users);
    return res.send(users);
  });

  app.listen(PORT, () => {
    console.log(`server run on port ${PORT} !!`);
  });
};

export { runApp };
