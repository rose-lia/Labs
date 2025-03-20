import CartItem from "../models/CartItem"
import HTTPHandler from "../utils/HTTPHandler"

// READ MANY

export const getCartItems: HTTPHandler = async (req, res) => {
	try {
		const cartItems = await CartItem.find({
			userId: req.params.userId,
		})
		res.status(200).send(cartItems)
	} catch (error) {
		res.status(500).send("Bad Request!")
	}
}

// CREATE

export const postCartItem: HTTPHandler = async (req, res) => {
	try {
		const userCartItems = await CartItem.find({
			userId: req.params.userId,
			product: req.body.product,
		})
		if (userCartItems.length === 0) {
			const cartItem = new CartItem(req.body)
			await cartItem.save()
			res.status(201).send(cartItem)
		} else {
			userCartItems[0].quantity += req.body.quantity
			await userCartItems[0].save()
			res.status(200).send(userCartItems[0])
		}
	} catch (error) {
		res.status(400).send("Bad Request")
	}
}

// PATCH/UPDATE ITEM

export const updateCartItem: HTTPHandler = async (req, res) => {
	try {
		const userCartItems = await CartItem.find({
			userId: req.params.userId,
			product: req.params.productId,
		})
		if (userCartItems.length === 0) {
			throw new Error("Cart Item Not Found")
		} else {
			userCartItems[0].quantity += req.body.quantity
		}
		await userCartItems[0].save()
		res.status(200).send(userCartItems[0])
	} catch (error: any) {
		res.status(404).send(error.status)
	}
}

// DESTROY

export const deleteCartItem: HTTPHandler = async (req, res) => {
	try {
		const userCartItems = await CartItem.find({
			userId: req.params.userId,
			product: req.params.productId,
		})
		if (userCartItems.length === 0) {
			throw new Error("Cart Item Not Found")
		}
		const userCartItemId = userCartItems[0]._id
		await CartItem.findByIdAndDelete(userCartItemId)
		res.status(204).send()
	} catch (error) {
		res.status(404).send("Cart Item not found!")
	}
}
