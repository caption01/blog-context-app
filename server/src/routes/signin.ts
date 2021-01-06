import { Router } from "express";

import { signIn } from "../controller/signin";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.post("/", checkAuth, signIn);

export { router as signInRouter };
