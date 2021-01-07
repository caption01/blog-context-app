import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";

import Articles from "./articles";

export interface UsersAttr {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
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

  @Column
  role: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @HasMany(() => Articles)
  articles: Articles[];
}

export default Users;
