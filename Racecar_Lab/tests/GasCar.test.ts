import { GasCar } from "../src/GasCar"

describe("GasCar class", () => {
    it("the team and fuel properties are set from the constructor parameters", () => {
        const newCar = new GasCar("Team 1", 20)
        expect(newCar.team).toBe("Team 1")
        expect(newCar.fuel).toBe(20)
    })
    it("fuel defaults to 10, when the second constructor parameter is omitted", () => {
        const newCar = new GasCar("Team 1")
        expect(newCar.fuel).toBe(10)
    })
    it("the speed property starts at 0", () => {
        const newCar = new GasCar("Team 1", 20)
        expect(newCar.speed).toBe(0)
    })
    it("calling accelerate once brings the speed to 2", () => {
        const newCar = new GasCar("Team 1")
        newCar.accelerate()
        expect(newCar.speed).toBe(2)
    })
    it("calling accelerate twice brings speed to 4", () => {
        const newCar = new GasCar("Team 1")
        newCar.accelerate()
        newCar.accelerate()
        expect(newCar.speed).toBe(4)
    })
    it("calling accelerate once reduces fuel by 1", () => {
        const newCar = new GasCar("Team 1")
        newCar.accelerate()
        expect(newCar.fuel).toBe(9)
    })
    it("calling accelerate twice reduces fuel by 2", () => {
        const newCar = new GasCar("Team 1")
        newCar.accelerate()
        newCar.accelerate()
        expect(newCar.fuel).toBe(8)
    })
    it("isFuelEmpty returns true when fuel is 0", () => {
        const newCar = new GasCar("Team 1", 0)
        const fuelLevel = newCar.isFuelEmpty()
        expect(fuelLevel).toBe(true)
    })
    it("isFuelEmpty returns false when fuel is greater than 0", () => {
        const newCar = new GasCar("Team 1")
        const fuelLevel = newCar.isFuelEmpty()
        expect(fuelLevel).toBe(false)
    })
})

