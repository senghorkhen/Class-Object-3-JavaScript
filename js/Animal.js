// import Animal from './Animal.js';
export default class Animal {
    //setter
    setName(name) {
        this.mName = name;
    }
    //getter
    getName() {
        console.log(this.mName);
    }
    //Behavior
    walk() {
        console.log("walking...");
    }
    run() {
        console.log("running");
    }
}