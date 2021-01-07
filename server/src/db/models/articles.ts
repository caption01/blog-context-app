import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";

import Users from "./user";

export interface ArticleAttr {
  id: number;
  title: string;
  link: string;
  tags: string[];
  user_id: number;
}

@Table
class Articles extends Model<ArticleAttr> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column
  link: string;

  @Column(DataType.ARRAY(DataType.STRING))
  tags: string[];

  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @BelongsTo(() => Users)
  user: Users;
}

export default Articles;
