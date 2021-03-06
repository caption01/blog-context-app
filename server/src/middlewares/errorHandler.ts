import { Request, Response, NextFunction } from "express";

import { CustomError } from "../errors/customError";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log("please update error handler", err.message);
  return res.status(400).send({
    errors: [{ message: err.message }],
  });
};
