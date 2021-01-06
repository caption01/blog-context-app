import { Sequelize } from "sequelize-typescript";

import { configs } from "./config/database";
import Users from "./models/user";

const dev = process.env.NODE_ENV !== "production";

const dbConfig = dev ? configs.development : configs.production;

const sequelize = new Sequelize({ ...dbConfig });

sequelize.addModels([Users]);

export { sequelize };
