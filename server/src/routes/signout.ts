import { Router } from "express";

import { signOut } from "../controller/signout";

const router = Router();

router.get("/", (req, res) => signOut(req, res));

export { router as signOutRouter };
