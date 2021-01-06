import { Request, Response } from "express";

import User from "../db/models/user";

export const signOut = async (req: Request, res: Response) => {
  // const users = await User.scope().findAll();
  res.send([]);
};
