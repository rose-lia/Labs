import axios from "axios"
import { CartItem } from "../../interfaces/CartItem"

const apiUrl = import.meta.env.VITE_API_BASE_URL


export const postCartItem = async (cartItem: CartItem): Promise<CartItem> => {
    return ((await axios.post(apiUrl + "/cart", cartItem)).data)
}

export const getCartItems = async (): Promise<CartItem[]> => {
    return ((await axios.get(apiUrl + "/cart")).data)
}


export const updateCartItem = async (id: string, newCartItem: CartItem): Promise<CartItem[]> => {
	return (await axios.put(apiUrl + "/cart" + id, newCartItem)).data
}

export const deleteCartItem = async (id: string): Promise<void> => {
	return (await axios.delete(apiUrl + "/cart" + id))
}