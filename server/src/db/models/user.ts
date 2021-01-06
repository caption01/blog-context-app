import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

export interface UsersAttr {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
}

// export interface UserInstance extends ModelCtor<Users> {}
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
}

export default Users;
