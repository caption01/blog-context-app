import { Sequelize } from "sequelize-typescript";

import Users from "./models/user";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "nh-codecontext",
  username: "postgres",
  password: "admin",
  // models: [__dirname + "/models"],
});

sequelize.addModels([Users]);

export { sequelize };
