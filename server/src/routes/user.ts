import { Router } from "express";

import { getUsers } from "../controller/user";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/", checkAuth, getUsers);

export { router as userRouter };
