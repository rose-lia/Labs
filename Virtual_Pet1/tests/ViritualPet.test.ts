import VirtualPet from "../VirtualPet"

describe("VirtualPet properties", () => {
    it("initializes the name to match the given name", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.name).toBe("Willow")
    })
    it("initializes the starting hunger value to 50", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.hunger).toBe(50)
    })
    it("initializes the starting happiness value to 50", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.happiness).toBe(50)
    })
})

describe("VirtualPet return methods", () => {
    it("describe method returns the correct string", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.describe()).toBe("Name: Willow, Hunger: 50, Happiness: 50")
    })
    it("describe method returns the correct string", () => {
        const virtualPet = new VirtualPet("Stella", 40, 25)
        expect(virtualPet.describe()).toBe("Name: Stella, Hunger: 40, Happiness: 25")
    })
    it("getSatisfaction method returns happiness value minus hunger value", () => {
        const virtualPet = new VirtualPet("Willow", 30, 70)
        expect(virtualPet.getSatisfaction()).toBe(40)
    })
    it("getSatisfaction method returns happiness value minus hunger value", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.getSatisfaction()).toBe(0)
    })
    it("makeSound method returns a string with name says imputted sound", () => {
        const virtualPet = new VirtualPet("Froggy")
        expect(virtualPet.makeSound("ribbit")).toBe("Froggy says ribbit")
    })
    it("makeSound method returns a string with name says imputted sound", () => {
        const virtualPet = new VirtualPet("Cow")
        expect(virtualPet.makeSound("moo")).toBe("Cow says moo")
    })
})

describe("VirtualPet modify methods", () => {
    it("decreases the hunger by 10 when fed once", () => {
        const virtualPet = new VirtualPet("Willow")
        virtualPet.feed()
        expect(virtualPet.hunger).toBe(40)
    })
    it("decreases the hunger by 20 when fed twice", () => {
        const virtualPet = new VirtualPet("Stella", 40, 75)
        virtualPet.feed()
        virtualPet.feed()
        expect(virtualPet.hunger).toBe(20)
    })
    it("hunger value does not go below 0", () => {
        const virtualPet = new VirtualPet("Lucy", 5, 30)
        virtualPet.feed()
        expect(virtualPet.hunger).toBe(0)
    })
    it("increases the happiness by 10 when played with once", () => {
        const virtualPet = new VirtualPet("Willow")
        virtualPet.play()
        expect(virtualPet.happiness).toBe(60)
    })
    it("increases the happiness by 30 when played with 3 times", () => {
        const virtualPet = new VirtualPet("Stella", 30, 60)
        virtualPet.play()
        virtualPet.play()
        virtualPet.play()
        expect(virtualPet.happiness).toBe(90)
    })
    it("happiness value does not go above 100", () => {
        const virtualPet = new VirtualPet("Lucy", 60, 95)
        virtualPet.play()
        expect(virtualPet.happiness).toBe(100)
    })
})