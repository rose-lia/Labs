import Cat from "../Cat"
import Dog from "../Dog"
import { decay, makePet } from "../pet-functions"
import VirtualPet from "../VirtualPet"

describe("decay Function", () => {
    it("hunger and happiness are adjusted accordingly", () => {
        const newPet = new VirtualPet("Tuna", 75, 25)
        decay(newPet)
        expect(newPet.hunger).toBe(80)
        expect(newPet.happiness).toBe(20)
    })
    it("hunger does not go above 100", () => {
        const newPet = new VirtualPet("Tuna", 97)
        decay(newPet)
        expect(newPet.hunger).toBe(100)
    })
    it("happiness does not go below 0", () => {
        const newPet = new VirtualPet("Tuna", 50, 2)
        decay(newPet)
        expect(newPet.happiness).toBe(0)
    })
})

describe("makePet Function", () => {
    it("returns a Dog with the correct name", () => {
        const newPet = makePet("Lucy", "dog")
        expect(newPet instanceof Dog).toBeTruthy()
        expect(newPet.name).toBe("Lucy")
    })
    it("returns a Cat with the correct name and color", () => {
        const newPet = makePet("Wilson", "cat")
        expect(newPet instanceof Cat).toBeTruthy()
        expect(newPet.name).toBe("Wilson")
        expect((newPet as Cat).color).toBe("black")
    })
    it("returns a VirtualPet with the correct name", () => {
        const newPet = makePet("Apollo", "horse")
        expect(newPet instanceof VirtualPet).toBeTruthy()
        expect(newPet.name).toBe("Apollo")
    })
})
