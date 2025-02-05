import express, { json } from "express"
import cors from "cors"
// const uuid = require("uuid")

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
    res.status(200).json(cartItems)
  })

app.get("/cart-items/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const cartItem = cartItems.find((item) => item.id === id)
    try {
    res.status(200).json(cartItem)
} catch (err) {
    res.status(404).send(`ID Not Found`)
}
})

app.post("/cart-items", (req, res) => {
    const cartItem = req.body as CartItem
    const newId = 
    cartItems.push(cartItem)
    res.status(201).json(`${cartItem.product} added`)
})
/*
app.put("/cart-items/:id", (req, res) => {
    // update a single item in the array with given ID
    res.status(200).send(`this is the updated ${cartItem}`).json(cartItem)
})

app.delete("/cart-items/:id", (req, res) => {
    // delete a single item in the array with given ID

    res.status(204).send(`this ${cartItem} has been deleted`).json(cartItem)
})
*/
const PORT = 3000
app.listen(PORT, () =>
  console.log("listening on port " + PORT)
)