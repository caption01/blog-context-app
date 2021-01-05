import { Model, DataTypes } from "sequelize";

const users = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

export { users };
