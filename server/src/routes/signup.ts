import { Router } from "express";

import { signUp } from "../controller/signup";

const router = Router();

router.post("/", signUp);

export { router as signUpRouter };
