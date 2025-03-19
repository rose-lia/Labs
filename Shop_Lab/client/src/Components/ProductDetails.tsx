import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../Services/productService"
import { Product } from "../../interfaces/Product"
import image from "../images/coming-soon.jpg"

const ProductDetails = () => {
	const productId: string | undefined = useParams().id
	const [product, setProduct] = useState<Product>()

	useEffect(() => {
		if (!productId) return

		getProduct(productId).then((productData) =>
			setProduct(productData)
		)
	}, [productId])
	if (!product) return null
	return (
		<div>
			{product.name}
			{product.price}
			<img
				src={image}
				height={60}
				width={80}
			/>
		</div>
	)
}

export default ProductDetails
