export default class VirtualPet {
    name: string
    hunger: number = 50
    happiness: number = 50
    constructor(n: string) {
        this.name = n
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
        }
    }
    play(): void {
        if (this.happiness <= 90) {
            this.happiness = this.happiness + 10
        }
    }
}
