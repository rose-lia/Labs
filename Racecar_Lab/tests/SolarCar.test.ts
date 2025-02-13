import { SolarCar } from "../src/SolarCar"

describe("SolarCar class", () => {
    it("the team property is set from the constructor parameter", () => {
        const newCar = new SolarCar("Team 1")
        expect(newCar.team).toBe("Team 1")
    })
    it("the speed property starts at 0", () => {
        const newCar = new SolarCar("Team 1")
        expect(newCar.speed).toBe(0)
    })
    it("calling accelerate once brings the speed to 1", () => {
        const newCar = new SolarCar("Team 1")
        newCar.accelerate()
        expect(newCar.speed).toBe(1)
    })
    it("calling accelerate twice brings the speed to 2", () => {
        const newCar = new SolarCar("Team 1")
        newCar.accelerate()
        newCar.accelerate()
        expect(newCar.speed).toBe(2)
    })
    it("isFuelEmpty returns false", () => {
        const newCar = new SolarCar("Team 1")
        const fuelLevel = newCar.isFuelEmpty()
        expect(fuelLevel).toBe(false)
    })
})