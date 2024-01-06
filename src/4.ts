class Key {
	private signature = Math.random();
	getSignature(): number {
		return this.signature;
	}
}

class Person {
	private key: Key;
	constructor(key: Key) {
		this.key = key;
	}
	getKey(): Key {
		return this.key;
	}
}

abstract class House {
	door: boolean = false;
	tenants: Person[] = [];
	comeIn(person: Person): void {
		if (this.door) {
			const tenants = [];
			this.tenants.push(person);
		}
	}
	abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
	OpenDoor(key: Key): void {
		if (key === person.getKey()) {
			this.door = true;
		}
	}
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse();
house.OpenDoor(person.getKey());
house.comeIn(person);

export {};
