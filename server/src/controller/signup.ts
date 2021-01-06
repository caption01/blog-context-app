import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../db/models/user";
import { SignUpError } from "../errors/signupError";

const secreate = "asdasdq2e13";

export const signUp = async (req: Request, res: Response) => {
  const { username, password, email, role } = req.body;

  const exitingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (exitingUser) {
    throw new SignUpError();
  }

  const token = jwt.sign({ payload: email }, secreate, {
    expiresIn: 60,
  });

  const users = await User.build({ username, password, email, role });
  await users.save();

  return res.status(200).send({
    data: {
      token,
    },
  });
};
