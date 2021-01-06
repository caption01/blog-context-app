import { Request, Response } from "express";

import User from "../db/models/user";
import { SignInError } from "../errors/signinError";

export const signIn = async (req: Request, res: Response) => {
  const { username, password, email, role } = req.body;

  const exitingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (exitingUser) {
    throw new SignInError();
  }

  const users = await User.build({ username, password, email, role });

  await users.save();

  return res.status(200).send(users);
};
