import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import User from "../db/models/user";
import { SignInError } from "../errors/signinError";

const secreate = "asdasdq2e13";

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

  const token = jwt.sign({ payload: email }, secreate, {
    expiresIn: 60,
  });

  return res.status(200).send({ data: { token } });
};
