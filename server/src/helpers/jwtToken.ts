import jwt from "jsonwebtoken";

import User from "../db/models/user";

const secreate = "asdasdq2e13";
const tokenExpire = 60 * 60 * 24;

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, secreate, {
    expiresIn: tokenExpire,
  });

  return token;
};

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
