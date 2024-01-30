class Key {
  private signature: number = Math.random();
  getSignature() {
    console.log(this.signature);
  }
}
class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    console.log(this.key);
  }
}
abstract class House {
  constructor(protected key: Key) {
    this.key = key;
  }
  door: boolean;
  tenants: Person[] = [];
  comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }
  abstract openDoor(getKey);
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(getKey) {
    if (this.key === getKey) this.door = true;
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
