import axios from "axios"
import { Product } from "../../interfaces/Product"

const apiUrl = import.meta.env.VITE_API_BASE_URL

export const getProducts = async (
	maxPrice: number | null,
	includes: string | null,
	limit: number | null
): Promise<Product[]> => {
	const params = {
		...(maxPrice ? { "max-price": maxPrice } : {}),
		...(includes ? { includes } : {}),
		...(limit ? { limit } : {}),
	}
	return (await axios.get(`${apiUrl}/products`, { params })).data
}

export const getProduct = async (id: string): Promise<Product> => {
	return (await axios.get(`${apiUrl}/products/${id}`)).data
}
