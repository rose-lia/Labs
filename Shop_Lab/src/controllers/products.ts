import Product from "../models/Product"
import HTTPHandler from "../utils/HTTPHandler"

// CREATE

export const postProduct: HTTPHandler = async (req, res) => {
	try {
		const product = new Product(req.body)
		await product.save()
		res.status(201).send(product)
	} catch (error) {
		res.status(400).send("Bad Request")
	}
}

// READ MANY

export const getProducts: HTTPHandler = async (req, res) => {
	try {
		const query: any = {}
		if (req.query["max-price"] !== undefined) {
			query.price = { $lte: req.query["max-price"] }
		}
		if (req.query.includes !== undefined) {
			query.name = new RegExp(req.query.includes as string, "i")
			}

		// let filteredProducts = Product.find(query)
		// if (req.query.limit) {
		//     filteredProducts = filteredProducts.limit(Number(req.query.limit))
		// }
		// const products = await filteredProducts

		const products = await (req.query.limit
			? Product.find(query).limit(+req.query.limit)
			: Product.find(query))

		res.status(200).send(products)
	} catch (error) {
		res.status(500).send("Bad Request!")
	}
}

// READ ONE

export const getProduct: HTTPHandler = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).send(product)
	} catch (error) {
		res.status(404).send("product Not Found!")
	}
}

// UPDATE

export const putProduct: HTTPHandler = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		)
		res.status(200).send(product)
	} catch (error) {
		res.status(404).send("Product not found!")
	}
}

// DESTROY

export const deleteProduct: HTTPHandler = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (error) {
		res.status(404).send("Product not found!")
	}
}
