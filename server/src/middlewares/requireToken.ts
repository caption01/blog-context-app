import { Request, Response, NextFunction } from "express";

import {
  getToken,
  checkValidToken,
  getUserFromToken,
} from "../helpers/jwtToken";
import { TokenError } from "../errors/tokenError";

export const requireToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = getToken(req);

  if (!token) {
    throw new TokenError("token not found");
  }

  const valid = await checkValidToken(token);
  if (!valid) {
    throw new TokenError("token not valid");
  }

  const userData = await getUserFromToken(token);
  console.log("user from token", userData);
  req.session?.currentUser = userData;
  next();
};
