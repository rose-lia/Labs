import VirtualPet from "./VirtualPet";

export default class Dog extends VirtualPet {
    play(): void {
        if (this.happiness <= 85) {
            this.happiness = this.happiness + 15
        } else {
            this.happiness = 100
        }
    }
}