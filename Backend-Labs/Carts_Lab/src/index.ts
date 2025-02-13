import express, { json } from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

interface CartItem {
    id: number,
    product: string,
    price: number,
    quantity: number
}

const cartItems: CartItem[] = [
    { id: 1, product: "Strawberry", price: 5.0, quantity: 10 },
    { id: 2, product: "Mango", price: 1.0, quantity: 2 },
    { id: 3, product: "Pineapple", price: 3.0, quantity: 1 },
    { id: 4, product: "Kiwi", price: 1.50, quantity: 4 }
]

app.get("/cart-items", (req, res) => {
    const { maxPrice, prefix, pageSize } = req.query
    let filteredItems = cartItems
    if (maxPrice) {
        filteredItems = filteredItems.filter(item => item.price <= +maxPrice)
    }
    if (prefix) {
        filteredItems = filteredItems.filter(item => item.product.toLowerCase().startsWith(String(prefix).toLowerCase()))
    }
    if (pageSize) {
        filteredItems = filteredItems.slice(0, parseInt(String(pageSize)))
    }
    res.status(200).json(filteredItems)
  })

app.get("/cart-items/:id", (req, res) => {
    const { id } = req.params
    const cartItem = cartItems.find(item => item.id === +id)
    if (cartItem) { 
    res.status(200).json(cartItem)
} else {
    res.status(404).send(`ID Not Found`)
}
})

let nextId = cartItems.length > 0 ? Math.max(...cartItems.map(item => item.id)) + 1 : 1
app.post("/cart-items", (req, res) => {
    const cartItem = req.body as CartItem
    cartItem.id = nextId
    nextId++
    cartItems.push(cartItem)
    res.status(201).json(cartItem)
})

app.put("/cart-items/:id", (req, res) => {
    const { id } = req.params
    const cartItem = cartItems.find(item => item.id === +id)
    if (!cartItem) res.status(404).send("ID Not Found")
    if (cartItem && req.body.product !== undefined) cartItem.product = req.body.product
    if (cartItem && req.body.price !== undefined) cartItem.price = req.body.price
    if (cartItem && req.body.quantity !== undefined) cartItem.quantity = req.body.quantity
    res.status(200).json(cartItem)
})

app.delete("/cart-items/:id", (req, res) => {
    const { id } = req.params
    const cartItemIndex = cartItems.findIndex(item => item.id === +id)
    if (cartItemIndex === -1) {
        res.status(404).send("ID Not Found")
    } else {
        cartItems.splice(cartItemIndex, 1)
        res.status(204).send()
    }
})

const PORT = 3000
app.listen(PORT, () =>
  console.log("listening on port " + PORT)
)