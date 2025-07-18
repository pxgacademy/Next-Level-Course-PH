{
  // INSTANCEOF GUARD

  class Animal {
    constructor(
      public name: string,
      public species: string
    ) {}

    makeSound() {
      console.log("I can make sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I can bark");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I can mewing");
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) animal.makeBark();
    else if (animal instanceof Cat) animal.makeMew();
    else animal.makeSound();
  };

  const dog = new Dog("The dog", "Gew");
  const cat = new Dog("The cat", "Mew");

  getAnimal(dog);
  getAnimal(cat);

  // smart way of handling instanceof using arrow function
  const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
  const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

  // type narrowing
  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) animal.makeBark();
    else if (isCat(animal)) animal.makeMew();
    else animal.makeSound();
  };

  getAnimal2(dog);
  getAnimal2(cat);
  //
}
