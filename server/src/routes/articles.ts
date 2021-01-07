import { Router } from "express";

import {
  getArticles,
  createArticle,
  updateArticle,
} from "../controller/articles";
import { requireToken } from "../middlewares/requireToken";

const router = Router();

router.get("/", getArticles);
router.post("/", requireToken, createArticle);
router.put("/:id", requireToken, updateArticle);

export { router as articleRouter };
