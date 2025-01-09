
const calculateChange = (total, payment) => {
    return payment - total
}

const isSufficientPayment = (total, payment) => {
    if (payment >= total) {
        return true
    } else {
        return false
    }
}

const calculateTotal = (itemsArray) => {
    const sum = itemsArray.reduce((sum, item) => sum + item.price, 0)
    return sum 
}

const addItem = (itemsArray, name, price) => {
    const newItem = { name, price }
    itemsArray.push(newItem)
}

const removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1)
}

module.exports = { 
    calculateChange,
    isSufficientPayment,
    calculateTotal,
    addItem,
    removeItem
}