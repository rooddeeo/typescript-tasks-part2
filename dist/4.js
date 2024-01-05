class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor() {
        this.door = false;
        this.keyHause = new Key();
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            const tenants = [];
            this.tenants.push(person);
        }
    }
    OpenDoor(key) {
        if (key === this.keyHause.getSignature()) {
            this.door = true;
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key === person.getKey()) {
            this.door = true;
        }
    }
}
const key = new Key();
const person = new Person(key.getSignature());
const house = new MyHouse();
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map