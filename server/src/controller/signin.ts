import { Request, Response } from "express";

import User from "../db/models/user";
import { SignInError } from "../errors/signinError";
import { generateToken } from "../helpers/jwtToken";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const exitingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (!exitingUser) {
    throw new SignInError([{ msg: "user not found", field: "email" }]);
  }

  const userPassword = exitingUser?.dataValues?.password;

  if (userPassword !== password) {
    throw new SignInError([{ msg: "password not correct", field: "password" }]);
  }
  const payload = email;
  const token = generateToken(payload);

  return res.status(200).send({ data: { token } });
};
