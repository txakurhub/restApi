import { Router } from "express";
import * as productController from "../controllers/products.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductById);
router.post("/", verifyToken, productController.createProduct);
router.put("/:productId", verifyToken, productController.updateProductById);
router.delete("/:productId", productController.deleteProductById);

export default router;
