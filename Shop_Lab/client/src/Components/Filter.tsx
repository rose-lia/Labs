import { FC, useState } from "react"

const Filter: FC<{
	onSubmit: (queryParams: {
		maxPrice?: string
		includes?: string
		limit?: string
	}) => void
}> = ({ onSubmit }) => {
	const [maxPrice, setMaxPrice] = useState(0)
	const [includes, setIncludes] = useState("")
	const [limit, setLimit] = useState(0)

	const resetFilters = () => {
		setMaxPrice(0)
		setIncludes("")
		setLimit(0)
	}
	return (
		<>
			<label htmlFor="maxPrice">Max Price:</label>
			<span>$</span>
			<input
				type="number"
				id="maxPrice"
				name="maxPrice"
				step="0.01"
				value={maxPrice}
				onChange={(e) => setMaxPrice(+e.target.value)}
			/>
			<label htmlFor="includes">Includes:</label>
			<input
				type="text"
				id="includes"
				name="includes"
				value={includes}
				onChange={(e) => setIncludes(e.target.value)}
			/>
			<label htmlFor="limit">Limit:</label>
			<input
				type="number"
				id="limit"
				name="limit"
				value={limit}
				onChange={(e) => setLimit(+e.target.value)}
			/>
			<button
				onClick={() => {
					onSubmit({
						...(maxPrice ? { maxPrice: String(maxPrice) } : {}),
						...(includes ? { includes } : {}),
						...(limit ? { limit: String(limit) } : {}),
					})
					resetFilters()
				}}
			>
				Filter
			</button>
		</>
	)
}

export default Filter
