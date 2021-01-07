import { Sequelize } from "sequelize-typescript";

import { configs } from "./config/database";
import Users from "./models/user";
import Articles from "./models/articles";

const dev = process.env.NODE_ENV !== "production";

const dbConfig = dev ? configs.development : configs.production;

const sequelize = new Sequelize({ ...dbConfig });

sequelize.addModels([Users, Articles]);

export { sequelize };
