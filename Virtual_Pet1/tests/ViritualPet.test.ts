import VirtualPet from "../VirtualPet"

describe("VirtualPet Properties", () => {
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

describe("VirtualPet Methods", () => {
    it("describe method returns the correct string", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.describe()).toBe("Name: Willow, Hunger: 50, Happiness: 50")
    })
    /*
    it("", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.describe()).toBe()
    })
    */
    it("getSatisfaction method returns happiness value minus hunger value", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.getSatisfaction()).toBe(0)
    })
    /*
    it("", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.getSatisfaction()).toBe()
    })
    */
    it("makeSound method returns a string with name says imputted sound", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.makeSound("ribbit")).toBe("Willow says ribbit")
    })
    it("makeSound method returns a string with name says imputted sound", () => {
        const virtualPet = new VirtualPet("Willow")
        expect(virtualPet.makeSound("moo")).toBe("Willow says moo")
    })
})

/*
Jest tests: Test each method. Test calling them once.
Test calling them multiple times.
Test that they don't pass the limits (0 and 100).
*/