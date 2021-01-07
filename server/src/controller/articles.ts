import { Request, Response } from "express";

import Articles from "../db/models/articles";
import { RequestError } from "../errors/reqError";

export const getArticles = async (req: Request, res: Response) => {
  const articles = await Articles.findAll();

  return res.status(200).send({ data: { articles: articles || [] } });
};

export const createArticle = async (req, res) => {
  const { title, link, tags } = req.body;
  const userId = await req.session?.currentUser?.id;

  const article = await Articles.build({
    title,
    link,
    tags,
    user_id: userId,
  });
  await article.save();

  return res.status(201).send({
    data: {
      article,
    },
  });
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, link, tags } = req.body;

  const existingArticle = await Articles.findOne({ where: { id } });

  if (!existingArticle) throw new RequestError("Article not found");

  await Articles.update(
    {
      title,
      link,
      tags,
    },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    data: {
      success: true,
    },
  });
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  const existingArticle = await Articles.findOne({ where: { id } });

  if (!existingArticle) throw new RequestError("Article not found");

  await Articles.destroy({ where: { id } });

  return res.status(200).send({
    data: {
      success: true,
    },
  });
};
