import { Router } from 'express'
import { CreateProductController } from "./controllers/CreateProductController"

export const router = Router();

const createProduct= new CreateProductController();

router.post("/product", createProduct.handle)
