import { useSearchParams } from "react-router-dom"
import Filter from "./Filter"
import { useEffect, useState } from "react"
import { getProducts } from "../Services/productService"
import { Product } from "../../interfaces/Product"
import ProductCard from "./ProductCard"
import "./ProductList.css"

const ProductList = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const maxPrice = searchParams.get("maxPrice")
	const includes = searchParams.get("includes")
	const limit = searchParams.get("limit")
	const [products, setProducts] = useState<Product[]>([])
	const fetchProducts = async () => {
		const filteredProducts = await getProducts(
			maxPrice ? +maxPrice : null,
			includes ?? null,
			limit ? +limit : null
		)
		setProducts(filteredProducts)
	}
	useEffect(() => {
		fetchProducts()
	}, [searchParams])

	const handleFilterSubmit = (queryParams: {
        maxPrice?: string,
        includes? : string,
        limit?: string
    }) => {
        setSearchParams(queryParams)
	}

	return (
		<>
			<Filter onSubmit={handleFilterSubmit}/>
			<ul className="product-list">
				{products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					/>
				))}
			</ul>
			{maxPrice}
			{includes}
			{limit}
		</>
	)
}

export default ProductList
