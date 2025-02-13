import CartItem from "../models/CartItem"
import HTTPHandler from "../utils/HTTPHandler"

// READ MANY

export const getCartItems: HTTPHandler = async (req, res) => {
	try {
		const cartItems = await CartItem.find()
		res.status(200).send(cartItems)
	} catch (error) {
		res.status(500).send("Bad Request!")
	}
}

// CREATE

export const postCartItem: HTTPHandler = async (req, res) => {
	try {
		// // by using the userId and body of the request to
		// check against existing cart items. Do one of two
		// things after checking: 
		// // - Increment the quantity
		// // - Add a cart item to the collection using the
		// JSON body of the request.
		
		// new cartitem obj in req.body of post 
		const cartItem = new CartItem(req.body)
		await cartItem.save()
		res.status(201).send(cartItem)
	} catch (error) {
		res.status(400).send("Bad Request")
	}
}

// export const makePurchase: HTTPHandler = async (req, res) => {
// 	try {
// 		const user = await User.findById(req.params.id)
// 		if (!user) throw new Error("User Not Found")
// 		const purchase = new Purchase({
// 			...req.body,
// 			user: user._id,
// 		})
// 		await purchase.save()
// 		user.purchases.push(purchase._id)
// 		await user.save()
// 		res.status(201).send(purchase)
// 	} catch (error: any) {
// 		if (error.status === "User Not Found")
// 			res.status(404).send(error.status)
// 		else res.status(400).send("Bad Request")
// 	}
// }


// // READ ONE

// export const getCartItem: HTTPHandler = async (req, res) => {
// 	try {
// 		const cartItem = await CartItem.findById(req.params.id)
// 		res.status(200).send(cartItem)
// 	} catch (error) {
// 		res.status(404).send("Cart Item Not Found!")
// 	}
// }

// // UPDATE

// export const putCartItem: HTTPHandler = async (req, res) => {
// 	try {
// 		const cartItem = await CartItem.findByIdAndUpdate(
// 			req.params.id,
// 			req.body,
// 			{ new: true, runValidators: true }
// 		)
// 		res.status(200).send(cartItem)
// 	} catch (error) {
// 		res.status(404).send("Cart Item not found!")
// 	}
// }

// // DESTROY

// export const deleteCartItem: HTTPHandler = async (req, res) => {
// 	try {
// 		await CartItem.findByIdAndDelete(req.params.id)
// 		res.status(204).send()
// 	} catch (error) {
// 		res.status(404).send("Cart Item not found!")
// 	}
// }
