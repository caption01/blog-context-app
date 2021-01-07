import { Request, Response } from "express";

import User from "../db/models/user";
import { SignUpError } from "../errors/signupError";
import { generateToken } from "../helpers/jwtToken";

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

  const payload = email;
  const token = generateToken(payload);

  const users = await User.build({ username, password, email, role });
  await users.save();

  return res.status(201).send({
    data: {
      token,
    },
  });
};
