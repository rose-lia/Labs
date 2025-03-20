import { FC } from "react"
import { Product } from "../../interfaces/Product"
import image from "../images/coming-soon.jpg"
import "./ProductCard.css"
import { Link } from "react-router-dom"

const ProductCard: FC<{ product: Product }> = ({ product }) => {
	return (
		<li className="product-card">
			<Link to={`/products/${product._id}`}>{product.name}</Link>
			<div>{product.price}</div>
			<img
				src={image}
				height={45}
				width={60}
			/>
		</li>
	)
}

export default ProductCard
