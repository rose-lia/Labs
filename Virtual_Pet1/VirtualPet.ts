export default class VirtualPet {
    name: string
    hunger: number
    happiness: number
    constructor(n: string, hun: number = 50, hap: number = 50) {
        this.name = n
        this.hunger = hun
        this.happiness = hap
    }

    describe(): string {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`
    }
    getSatisfaction(): number {
        return this.happiness - this.hunger
    }
    makeSound(sound: string): string {
        return `${this.name} says ${sound}`
    }
    feed(): void {
        if (this.hunger >= 10) {
            this.hunger = this.hunger - 10
        } else {
            this.hunger = 0
        }
    }
    play(): void {
        if (this.happiness <= 90) {
            this.happiness = this.happiness + 10
        } else {
            this.happiness = 100
        }
    }
}
