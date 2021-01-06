import { Request, Response, NextFunction } from "express";

import {
  getToken,
  checkValidToken,
  getUserFromToken,
} from "../helpers/jwtToken";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = getToken(req);

  if (!token) {
    next();
    return;
  }

  const valid = await checkValidToken(token);
  if (!valid) {
    next();
    return;
  }

  const existingUser = await getUserFromToken(token);
  res.status(200).send({
    data: {
      user: existingUser,
    },
  });
};
