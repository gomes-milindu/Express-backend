import express from "express"
import createProduct from "../controllers/productRouter.js";

const productRouter = express.Router()

productRouter.post("/",createProduct);

export default productRouter;