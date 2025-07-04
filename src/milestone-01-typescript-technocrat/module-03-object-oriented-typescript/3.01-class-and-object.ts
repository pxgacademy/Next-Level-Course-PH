{
  // OOP - CLASS

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} speak ${this.sound}`);
    }
  }
  const cat = new Animal("Catty", "Cat", "Mew Mew");
  cat.makeSound();

  // parameter properties
  // if you use parameter properties, compiler set the types and initialize the values
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} speak ${this.sound}`);
    }
  }

  const catty = new Animal2("Catty", "Cat", "Mew Mew");
  catty.makeSound();
}
