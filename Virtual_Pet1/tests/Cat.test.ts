import VirtualPet from "../VirtualPet"
import Cat from "../Cat"

describe("Cat Properties", () => {
    it("a new instance of Cat has property name from the constructor", () => {
        const newCat = new Cat("Kashi", "color")
        expect(newCat.name).toBe("Kashi")
    })
    it("a new instance of Cat has property color from the constructor", () => {
        const newCat = new Cat("Kashi", "color")
        expect(newCat.color).toBe("color")
    })        
    it("a new instance of Cat initializes the starting hunger value to 50", () => {
        const newCat = new Cat("Kashi", "color")
        expect(newCat.hunger).toBe(50)
    })
    it("a new instance of Cat initializes the starting happiness value to 50", () => {
        const newCat = new Cat("Kashi", "color")
        expect(newCat.happiness).toBe(50)
    })
    
// should this be in a separate "describe"?
    it("the getAttitude method returns inquisitive for positive satisfaction", () => {
        const newCat = new Cat("Kashi", "color", 5, 100)
        expect(newCat.getAttitude()).toBe("inquisitive")
    })
    it("the getAttitude method returns grumpy for negative satisfaction", () => {
        const newCat = new Cat("Kashi", "color", 30, 10)
        expect(newCat.getAttitude()).toBe("grumpy")
    })
    it("the getAttitude method returns grumpy for zero satisfaction", () => {
        const newCat = new Cat("Kashi", "color")
        expect(newCat.getAttitude()).toBe("grumpy")
    })
// should this be in a separate "describe"?
    it("the describe method returns a string with name, hunger, happiness, color, and attitude", () => {
        const newCat = new Cat("Kashi", "Grey")
        expect(newCat.describe()).toBe("Name: Kashi, Hunger: 50, Happiness: 50, Color: Grey, Attitude: grumpy")
    })
})