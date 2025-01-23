import { GasCar } from "../src/GasCar"
import { Racer } from "../src/Racer"
import { findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer } from "../src/racer-functions"
import { SolarCar } from "../src/SolarCar"

const newGasCar1 = new GasCar("Team 1", 10, 45)
const newGasCar2 = new GasCar("Team 2", 0)
const newGasCar3 = new GasCar("Team 3", 6, 50)
const newGasCar4 = new GasCar("Team 4", 0)
const newGasCar5 = new GasCar("Team 5", 12, 60)
const newGasCar6 = new GasCar("Team 6", 0)
const newSolarCar7 = new SolarCar("Team 7", 40)
const newSolarCar8 = new SolarCar("Team 8", 30)
const newSolarCar9 = new SolarCar("Team 9", 20)
const newSolarCar10 = new SolarCar("Team 10")

describe("findRacersWithEmptyFuel()", () => {
    it("returns an array of GasCars with no fuel in an array where GasCars have mixed fuel", () => {
        const newGasCarArr = [newGasCar1, newGasCar2, newGasCar3]
        const newGasCarArrNoFuel = findRacersWithEmptyFuel(newGasCarArr)
        expect(newGasCarArrNoFuel.length).toBe(1)
        expect((newGasCarArrNoFuel[0] as GasCar).fuel).toBe(0)
    })
    it("returns an array of all GasCars in an array of GasCars with no fuel", () => {
        const newGasCarArr = [newGasCar2, newGasCar4, newGasCar6]
        const newGasCarArrNoFuel = findRacersWithEmptyFuel(newGasCarArr)
        expect(newGasCarArrNoFuel.length).toBe(newGasCarArr.length)
        expect((newGasCarArrNoFuel[0] as GasCar).fuel).toBe(0)
        expect((newGasCarArrNoFuel[1] as GasCar).fuel).toBe(0)
        expect((newGasCarArrNoFuel[2] as GasCar).fuel).toBe(0)
        // for(const el of newGasCarArrNoFuel) {
        //     expect((el as GasCar).fuel).toBe(0)
        // }
    })
    it("returns an emtpy array in an array of GasCars with fuel", () => {
        const newGasCarArr = [newGasCar1, newGasCar3, newGasCar5]
        const newGasCarArrNoFuel = findRacersWithEmptyFuel(newGasCarArr)
        expect(newGasCarArrNoFuel.length).toBe(0)
    })
    it("returns an emtpy array in an array of SolarCars", () => {
        const newSolarCarArr = [newSolarCar7, newSolarCar8, newSolarCar9]
        const newSolarCarArrNoFuel = findRacersWithEmptyFuel(newSolarCarArr)
        expect(newSolarCarArrNoFuel.length).toBe(0)
    })
    it("returns an array of GasCars with no fuel in an array with a mix of SolarCars and GasCars", () => {
        const newMixedCarArr = [newGasCar1, newGasCar2, newSolarCar7, newSolarCar8]
        const newGasCarArrNoFuel = findRacersWithEmptyFuel(newMixedCarArr)
        expect(newGasCarArrNoFuel.length).toBe(1)
       // expect(newGasCarArrNoFuel[0] instanceof GasCar).toBeTruthy()
        expect((newGasCarArrNoFuel[0] as GasCar).fuel).toBe(0)
    })
    it("returns an empty array from an empty array", () => {
        const newCarArr: Racer[] = []
        const newCarArrNoFuel = findRacersWithEmptyFuel(newCarArr)
        expect(newCarArrNoFuel.length).toBe(0)
    })
})

describe("findAverageSpeed()", () => {
    it("returns the average speed of a GasCar array with different speeds", () => {
        const newGasCarArr = [newGasCar1, newGasCar2, newGasCar3]
        const averageSpeed = findAverageSpeed(newGasCarArr)
        expect(Math.round(averageSpeed)).toBe(32)
    })
    it("returns the average speed of a GasCar and SolarCar array with different speeds", () => {
        const newMixedCarArr = [newGasCar1, newGasCar2, newSolarCar7, newSolarCar8]
        const averageSpeed = findAverageSpeed(newMixedCarArr)
        expect(Math.round(averageSpeed)).toBe(29)
    })
    it("returns 0 if the array of cars all have a speed of 0", () => {
        const newMixedCarArr = [newGasCar2, newGasCar4, newGasCar6, newSolarCar10]
        const averageSpeed = findAverageSpeed(newMixedCarArr)
        expect(averageSpeed).toBe(0)
    })
    it("returns 0 from an empty array", () => {
        const newCarArr: Racer[] = []
        const averageSpeed = findAverageSpeed(newCarArr)
        expect(averageSpeed).toBe(0)
    })
})

describe("getFasterRacer()", () => {
    it("returns racerA", () => {
        const fasterRacer = getFasterRacer(newGasCar3, newGasCar1)
        expect(fasterRacer).toBe(newGasCar3)
    })
    it("returns racerB", () => {
        const fasterRacer = getFasterRacer(newGasCar1, newGasCar3)
        expect(fasterRacer).toBe(newGasCar3)
    })
    it("returns null if racerA speed is equal to racerB speed", () => {
        const fasterRacer = getFasterRacer(newGasCar2, newGasCar4)
        expect(fasterRacer).toBe(null)
    })
    it("returns the car with fastest speed between a GasCar and SolarCar", () => {
        const fasterRacer = getFasterRacer(newGasCar5, newSolarCar7)
        expect(fasterRacer).toBe(newGasCar5)
    })
})