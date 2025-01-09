
describe("calculateChange(total, payment)", () => {
    it("returns 1 given a payment of 6 and a total of 5", () => {
        expect(calculateChange(5, 6)).toEqual(1)
    }) 
    it("returns 0.73 given a payment of 13.03 and a total of 12.30", () => {
        expect(+calculateChange(12.30, 13.03).toFixed(2)).toEqual(0.73)
    }) 
    it("returns 5 given a payment of 20 and a total of 15", () => {
        expect(calculateChange(15, 20)).toEqual(5)
    }) 
})

describe("isSufficientPayment(total, payment)", () => {
    it("returns true given a payment of 6 and a total of 5", () => {
        expect(isSufficientPayment(5, 6)).toBe(true)
    }) 
    it("returns false given a payment of 7 and a total of 10", () => {
        expect(isSufficientPayment(10, 7)).toBe(false)
    }) 
    it("returns true given a payment of 3 and a total of 3", () => {
        expect(isSufficientPayment(3, 3)).toBe(true)
    }) 
    it("returns true given a payment of 10 and a total of 6.50", () => {
        expect(isSufficientPayment(6.50, 10)).toBe(true)
    })
})

describe("calculateTotal(itemsArray)", () => {
    it("returns 4.99 given an array with only one item with a price of 4.99", () => {
        expect(calculateTotal([ 
            { name: "", price: 4.99 }
        ])).toEqual(4.99)
    })
    it("returns 16.52 given an array with three items with prices 3.50, 12.99, and 0.03", () => {
        expect(+calculateTotal([ 
            { name: "", price: 3.50 },
            { name: "", price: 12.99 },
            { name: "", price: 0.03 }
        ]).toFixed(2)).toEqual(16.52)
    }) 
    it("returns 0 given an empty array", () => {
        expect(calculateTotal([ 

        ])).toEqual(0)
    }) 
    it("returns 17.77 given an array with three items with prices 5.00, 2.77, and 10.00", () => {
        expect(calculateTotal([ 
            { name: "", price: 5.00 },
            { name: "", price: 2.77 },
            { name: "", price: 10.00 }
        ])).toEqual(17.77)
    }) 
})

describe("addItem()", () => {
    it("adds one item to an empty array", () => {
       // arrange
        const itemsArray = [ ]
        // act
        addItem(itemsArray, "Beans", 3)
        const expectedArray= [
            { name: "Beans", price: 3 }
        ]
        // assert
        expect(itemsArray).toEqual(expectedArray)
    }) 
    it("adds one item to an array with one existing item", () => {
        // arrange
        const itemsArray = [
            { name: "Beans", price: 3 }
        ]
        // act
        addItem(itemsArray, "Sugar", 2)
        const expectedArray= [
            { name: "Beans", price: 3 },
            { name: "Sugar", price: 2 }
        ]
         // assert
         expect(itemsArray).toEqual(expectedArray)
     })  
    it("adds one item to an array with three existing items", () => {
        // arrange
        const itemsArray = [
            { name: "Pasta", price: 5 },
            { name: "Tomatoes", price: 3 },
            { name: "Basil", price: 2 }
        ]
        // act
        addItem(itemsArray, "Garlic", 1)
        const expectedArray = [
            { name: "Pasta", price: 5 },
            { name: "Tomatoes", price: 3 },
            { name: "Basil", price: 2 },
            { name: "Garlic", price: 1}
        ]
        // assert
        expect(itemsArray).toEqual(expectedArray)
    })
})

describe("removeItem()", () => {
    it("removes the first item from an array of three items", () => {
       // arrange
       const itemsArray = [
        { name: "Pasta", price: 5 },
        { name: "Tomatoes", price: 3 },
        { name: "Basil", price: 2 }
    ]
       // act
    removeItem(itemsArray, 0)
       const expectedArray= [
        { name: "Tomatoes", price: 3 },
        { name: "Basil", price: 2 }
       ]
       // assert
       expect(itemsArray).toEqual(expectedArray)
    })         
    it("removes the last item from an array of three items", () => {
       // arrange
       const itemsArray = [
        { name: "Pasta", price: 5 },
        { name: "Tomatoes", price: 3 },
        { name: "Basil", price: 2 }
    ]
       // act
       removeItem(itemsArray, itemsArray.length - 1)
       const expectedArray= [
        { name: "Pasta", price: 5 },
        { name: "Tomatoes", price: 3 }
       ]
       // assert
       expect(itemsArray).toEqual(expectedArray)
    })  
    it("removes the middle item from an array of three items", () => {
       // arrange
       const itemsArray = [
        { name: "Pasta", price: 5 },
        { name: "Tomatoes", price: 3 },
        { name: "Basil", price: 2 }
    ]
       // act
       removeItem(itemsArray, Math.ceil(itemsArray.length / 2 - 1))
       const expectedArray= [
        { name: "Pasta", price: 5 },
        { name: "Basil", price: 2 }
       ]
       // assert
       expect(itemsArray).toEqual(expectedArray)
    })  
    it("removes the only item from an array of one item", () => {
        expect()
    }) 
})

const { 
    calculateChange,
    isSufficientPayment,
    calculateTotal,
    addItem,
    removeItem
} = require("./cart-functions")
