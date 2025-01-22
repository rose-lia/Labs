import VirtualPet from "./VirtualPet";
import Dog from "./Dog";
import Cat from "./Cat";

export const decay = (pet: VirtualPet) => {
    pet.hunger = pet.hunger > 95 ? 100 : pet.hunger + 5
    pet.happiness = pet.happiness < 5 ? 0 : pet.happiness - 5
}

export const makePet = (name: string, type: string): VirtualPet => {
    if (type === "dog") {
        return new Dog(name)
    } else if (type === "cat") {
        return new Cat(name, "black")
    } else {
        return new VirtualPet(name)
    }
}