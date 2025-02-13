import { Router } from "express"
import {
	deleteUser,
	getUser,
	getUsers,
	postUser,
	putUser,
} from "../controllers/users"
import {
	deleteCartItem,
	getCartItems,
	postCartItem,
	updateCartItem,
} from "../controllers/cartItems"

const routes = Router()

routes.post("/", postUser)
routes.get("/", getUsers)
routes.get("/:id", getUser)
routes.put("/:id", putUser)
routes.delete("/:id", deleteUser)
routes.post("/:userId/cart", postCartItem)
routes.get("/:userId/cart", getCartItems)
routes.patch("/:userId/cart/:productId", updateCartItem)
routes.delete("/:userId/cart/:productId", deleteCartItem)

export default routes
