import Animal from './Animal.js';
export class Cat extends Animal {
    cry () {
        console.log('Crying...');
    }
    jump () {
        console.log('Carefully...');
    }
}