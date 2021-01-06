import { SequelizeOptions } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../../.env` });

interface Config {
  [index: string]: SequelizeOptions;
}

const configs: Config = {
  development: {
    username: "postgres",
    password: "admin",
    database: "nh-codecontext",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_URL,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  },
};

export { configs };
