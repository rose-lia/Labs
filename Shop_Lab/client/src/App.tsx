import "./App.css"
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import ProductDetails from "./Components/ProductDetails"
import ProductList from "./Components/ProductList"
import Cart from "./Components/Cart"

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/products"
						element={<ProductList />}
					/>
					<Route
						path="/products/:id"
						element={<ProductDetails />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
