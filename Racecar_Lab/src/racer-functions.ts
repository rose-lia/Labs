import { Racer } from "./Racer"

export const findRacersWithEmptyFuel = (racers: Racer[]): Racer[] => {
    return racers.filter(racer => racer.isFuelEmpty())
}

export const findAverageSpeed = (racers: Racer[]): number => {
    if (racers.length === 0) return 0
    return racers.reduce((sum, racer) => sum + racer.speed, 0) / racers.length
}

export const getFasterRacer = (racerA: Racer, racerB: Racer): Racer | null => {
    if (racerA.speed === racerB.speed) return null
    return racerA.speed > racerB.speed ? racerA : racerB
}
