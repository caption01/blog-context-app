import { Request, Response } from "express";

import User from "../db/models/user";

const checkObjectEmpty = (object: object): boolean => {
  return Object.keys(object).length === 0;
};

export const getUsers = async (req: Request, res: Response) => {
  const queryReq = req.query;

  if (!checkObjectEmpty(queryReq)) {
    const { email } = queryReq;

    const user = await User.scope().findOne({
      where: {
        email: email as string,
      },
    });

    res.send(user);
    return;
  }

  const users = await User.scope().findAll();
  res.send(users);
};
