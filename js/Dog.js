import Animal from './Animal.js';
export class Dog  extends Animal {
    bite() {
        console.log("Bite someone...");
    }
    barck() {
        console.log("Fus! Fus!");
    }
}
