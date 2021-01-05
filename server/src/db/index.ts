import { Sequelize } from "sequelize";

import { users } from "./models/user";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "nh-codecontext",
  username: "postgres",
  password: "admin",
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    const Users = users(sequelize);

    console.log("Connection has been established successfully.");

    return {
      models: {
        Users,
      },
    };
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectDb };
