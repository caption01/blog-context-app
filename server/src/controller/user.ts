import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  res.send({
    data: {
      user: null,
    },
  });
};
