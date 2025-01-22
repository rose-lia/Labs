import VirtualPet from "../VirtualPet"
import Dog from "../Dog"

describe("Dog Properties", () => {
    it("a new instance of Dog has property name from the constructor", () => {
        const newDog = new Dog("Willow")
        expect(newDog.name).toBe("Willow")
    })
    it("a new instance of Dog initializes the starting hunger value to 50", () => {
        const newDog = new Dog("Willow", 50, 50)
        expect(newDog.hunger).toBe(50)
    })
    it("a new instance of Dog initializes the starting happiness value to 50", () => {
        const newDog = new Dog("Willow", 50, 50)
        expect(newDog.happiness).toBe(50)
    })

// should this be in a separate "describe"?
    it("calling the play method inscreases the dog happiness by 15", () => {
        const newDog = new Dog("Willow")
        newDog.play()
        expect(newDog.happiness).toBe(65)
    })
    it("calling the play method does not increase the happiness past 100", () => {
        const newDog = new Dog("Willow", 50, 90)
        newDog.play()
        expect(newDog.happiness).toBe(100)
    })
})
