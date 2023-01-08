import { Router } from "express";
import * as programController from "../controllers/programs.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", programController.getPrograms);
router.get("/:programId", programController.getProgramById);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerador],
  programController.createProgram
);
router.put(
  "/:programId",
  authJwt.verifyToken,
  programController.updateProgramById
);
router.delete(
  "/:programId",
  [authJwt.verifyToken, authJwt.isModerador],
  programController.deleteProgramById 
);

export default router;
