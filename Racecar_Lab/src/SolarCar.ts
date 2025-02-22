import { Racer } from "./Racer"

export class SolarCar implements Racer {
    team: string
    speed: number
    constructor(team: string, speed: number = 0) {
        this.team = team
        this.speed = speed
    }
    accelerate(): void {
        this.speed = this.speed + 1
    }
    isFuelEmpty(): boolean {
        return false
    }
}