import { Router } from "express";

import { signIn } from "../controller/signin";

const router = Router();

router.post("/", (req, res) => signIn(req, res));

export { router as signInRouter };
