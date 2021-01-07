import { Router } from "express";

import { getArticles } from "../controller/articles";
import { requireToken } from "../middlewares/requireToken";

const router = Router();

router.get("/", requireToken, getArticles);

export { router as articleRouter };
