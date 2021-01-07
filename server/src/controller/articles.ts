import { Request, Response } from "express";

import Articles from "../db/models/articles";

export const getArticles = async (req: Request, res: Response) => {
  const userId = 1;

  const articles = await Articles.findAll({
    where: {
      user_id: userId,
    },
  });

  return res.status(200).send({ data: { articles: articles || [] } });
};
