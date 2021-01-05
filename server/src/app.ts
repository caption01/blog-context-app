import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDb } from "./db";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("hello");
});

app.get("/user", async (_req, res) => {
  const db = await connectDb();

  const Users = await db.models.Users;
  const users = await Users.findAll();
  return res.send(users);
});

export { app };
