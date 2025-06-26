"use strict";
{
    // INSTANCEOF GUARD
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I can make sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I can bark");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("I can mewing");
        }
    }
    const getAnimal = (animal) => {
        if (animal instanceof Dog)
            animal.makeBark();
        else if (animal instanceof Cat)
            animal.makeMew();
        else
            animal.makeSound();
    };
    const dog = new Dog("The dog", "Gew");
    const cat = new Dog("The cat", "Mew");
    getAnimal(dog);
    getAnimal(cat);
    // smart way of handling instanceof using arrow function
    const isDog = (animal) => animal instanceof Dog;
    const isCat = (animal) => animal instanceof Cat;
    // type narrowing
    const getAnimal2 = (animal) => {
        if (isDog(animal))
            animal.makeBark();
        else if (isCat(animal))
            animal.makeMew();
        else
            animal.makeSound();
    };
    getAnimal2(dog);
    getAnimal2(cat);
    //
}
