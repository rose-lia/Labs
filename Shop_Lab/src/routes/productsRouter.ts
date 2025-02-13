import { Router } from "express"
import {
	deleteProduct,
	getProduct,
	getProducts,
	postProduct,
	putProduct,
} from "../controllers/products"

const routes = Router()

routes.post("/", postProduct)
routes.get("/", getProducts)
routes.get("/:id", getProduct)
routes.put("/:id", putProduct)
routes.delete("/:id", deleteProduct)

export default routes
