import { Router } from "express";

import {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controller/articles";
import { requireToken } from "../middlewares/requireToken";

const router = Router();

router.get("/", getArticles);
router.post("/", requireToken, createArticle);
router.put("/:id", requireToken, updateArticle);
router.delete("/:id", requireToken, deleteArticle);

export { router as articleRouter };
