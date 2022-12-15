import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.createUser
);

export default router;
