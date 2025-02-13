import { Schema, model } from "mongoose"

const CartItemSchema = new Schema(
	{
		userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
			required: true,
		},
		product: {
			type: Schema.Types.ObjectId,
            ref: "Product",
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
)

const CartItem = model("CartItem", CartItemSchema)
export default CartItem
