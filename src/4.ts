class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) { }
  
  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  door: boolean = false;
  private tenants: Person[] = [];
  key: Key;

  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
      console.log('Person entered the house.');
    } else {
      console.log('Person did\'t entered the house.');
    }
  }

  abstract openDoor(key: number): void;
}

class MyHouse extends House {

  constructor(public key: Key) {
    super();
  }

openDoor(keySignature: number): void {
  if (keySignature === this.key.getSignature()) {
    this.door = true;
    console.log('Door is open. Welcome!');
  } else {
    this.door = false;
    console.log('Invalid key. Door remains closed.');
  }
}
}

const key = new Key();
const key1 = new Key();

const house = new MyHouse(key);
const person = new Person(key1);

house.openDoor(person.getKey());

house.comeIn(person);


export {};