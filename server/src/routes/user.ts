import { Router } from "express";

import { getUsers } from "../controller/user";

const router = Router();

router.get("/", (req, res) => getUsers(req, res));

export { router as userRouter };
