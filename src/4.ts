class Key {
  signature: number = Math.random();
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  constructor(protected key: Key) {}
  public door: boolean = false;
  public tenants: Person[] = [];
  comeIn(person: Person) {
    this.tenants.push(person);
  }
  abstract openDoor(key: number | undefined): void;
}

class MyHouse extends House {
  openDoor(key: number | undefined): void {
    if (key === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
