import VirtualPet from "./VirtualPet";

export default class Cat extends VirtualPet {
    color: string
    constructor(n: string,  c: string, hun: number = 50, hap: number = 50) {
        super(n, hun, hap)
        this.color = c
    }
    getAttitude(): string {
        const satisfaction = this.getSatisfaction()
        if (satisfaction > 0) {
            return "inquisitive"
        } else {
            return "grumpy"
        }
    }
    describe(): string {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Color: ${this.color}, Attitude: ${this.getAttitude()}`
    }
}