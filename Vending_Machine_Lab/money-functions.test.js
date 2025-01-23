const { 
    formatCurrency,
    getCoins
} = require("./money-functions")

describe("formatCurrency(amount)", () => {
    it("returns '$0.00' given the amount 0", () => {
        expect(formatCurrency(0.00)).toEqual('$0.00')
    }) 
    it("returns '$1.00' given the amount 1", () => {
        expect(formatCurrency(1.00)).toEqual('$1.00')
    })  
    it("returns '$1.50' given the amount 1.5", () => {
        expect(formatCurrency(1.50)).toEqual('$1.50')
    }) 
    it("returns '$0.01' given the amount 0.01", () => {
        expect(formatCurrency(0.01)).toEqual('$0.01')
    }) 
    it("returns '$527.68' given the amount 527.6789", () => {
        expect(formatCurrency(527.6789)).toEqual('$527.68')
    })
    it("returns '-$1.00' given the amount -1", () => {
        expect(formatCurrency(-1)).toEqual('-$1.00')
    })
    it("returns '$4.54' given the amount 4.538", () => {
        expect(formatCurrency(4.538)).toEqual('$4.54')
    })
    it("returns '$0.00' given the amount 0.003", () => {
        expect(formatCurrency(0.003)).toEqual('$0.00')
    })
})

describe("getCoins(cents)", () => {
    it("32 cents returns 1 quarter, 0 dimes, 1 nickel and 2 pennies", () => {
        expect(getCoins(32)).toEqual({
            quarters: 1,
            dimes: 0,
            nickels: 1,
            pennies: 2
          })
    }) 
    it("10 cents returns 0 quarters, 1 dime, 0 nickels and 0 pennies", () => {
        expect(getCoins(10)).toEqual({
            quarters: 0,
            dimes: 1,
            nickels: 0,
            pennies: 0
          })
    })   
    it("27 cents returns 1 quarter, 0 dimes, 0 nickels and 2 pennies", () => {
        expect(getCoins(27)).toEqual({
            quarters: 1,
            dimes: 0,
            nickels: 0,
            pennies: 2
          })
    }) 
    it("68 cents returnss 2 quarters, 1 dime, 1 nickel and 3 pennies", () => {
        expect(getCoins(68)).toEqual({
            quarters: 2,
            dimes: 1,
            nickels: 1,
            pennies: 3
          })
    }) 
})