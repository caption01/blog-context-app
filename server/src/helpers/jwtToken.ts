import jwt from "jsonwebtoken";

import User from "../db/models/user";

const secreate = "asdasdq2e13";

export const getToken = (req) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return null;

  const [_header, jwtToken] = bearerToken?.split(" ");
  return jwtToken;
};

export const checkValidToken = async (token) => {
  try {
    await jwt.verify(token, secreate);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUserFromToken = async (token) => {
  const decoded = jwt.verify(token, secreate);

  const email = decoded?.payload;
  const exitingUser = await User.findOne({
    where: {
      email,
    },
  });

  return exitingUser?.dataValues;
};
