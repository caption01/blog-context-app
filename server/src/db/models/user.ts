// import { Model, DataTypes, Sequelize } from "sequelize";
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
} from "sequelize-typescript";

export interface UsersAttr {
  id: number;
  username: string;
  password: string;
  email: string;
}
@Table
class Users extends Model<UsersAttr> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @CreatedAt
  @Column
  updated: Date;
}

export default Users;
