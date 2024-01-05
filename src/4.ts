class Key {
	private signature = Math.random();
	getSignature(): number {
		return this.signature;
	}
}

class Person {
	private key: number;
	constructor(key: number) {
		this.key = key;
	}
	getKey(): number {
		return this.key;
	}
}

class House {
	door: boolean = false;
	keyHause: Key = new Key();
	tenants: Person[] = [];
	comeIn(person: Person): void {
		if (this.door) {
			const tenants = [];
			this.tenants.push(person);
		}
	}
	OpenDoor(key: number): void {
		if (key === this.keyHause.getSignature()) {
			this.door = true;
		}
	}
}

class MyHouse extends House {
	openDoor(key: number): void {
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
