import { Router } from "express";

import { UserInstance } from "./../db/models/user";

let router = Router();

const userRouter = (db) => {
  router.get("/", async (req, res) => {
    const UserInstance: UserInstance = db.models.Users;
    const allUser = await UserInstance.findAll();

    return res.status(200).send(allUser);
  });

  return router;
};

export { userRouter };
