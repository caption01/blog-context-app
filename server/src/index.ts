import dotenv from "dotenv";

import { runApp } from "./app";

dotenv.config({ path: `${__dirname}/../.env` });

const PORT = process.env.APP_PORT || 4000;

const start = async () => {
  runApp(PORT);
};

start();
