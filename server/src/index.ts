import dotenv from "dotenv";

import { app } from "./app";

dotenv.config({ path: `${__dirname}/../.env` });

const PORT = process.env.APP_PORT || 4000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`server run on port ${PORT} !!`);
  });
};

start();
