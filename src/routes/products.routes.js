import { Router } from "express";
import * as productController from "../controllers/products.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductById);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerador],
  productController.createProduct
);
router.put(
  "/:productId",
  authJwt.verifyToken,
  productController.updateProductById
);
router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerador],
  productController.deleteProductById
);

export default router;
