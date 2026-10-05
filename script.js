class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this._species;
  }

  set species(value) {
    this._species = value;
  }

  makeSound() {
    return "Some generic animal sound";
  }
}

class Cat extends Animal {
  purr() {
    return "Purr";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof";
  }
}