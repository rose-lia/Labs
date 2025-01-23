import { Racer } from "./Racer"

export class GasCar implements Racer {
    team: string
    fuel: number
    speed: number
    constructor(team: string, fuel: number = 10, speed: number = 0) {
        this.team = team
        this.fuel = fuel
        this.speed = speed
    }
    accelerate(): void {
        this.speed = this.speed + 2
        this.fuel = this.fuel - 1
    }
    isFuelEmpty(): boolean {
        if (this.fuel === 0) return true
        return false
    }
}