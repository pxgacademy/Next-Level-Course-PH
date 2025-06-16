{
  // OOP - INHERITANCE

  /*
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHr: number) {
      console.log(`${this.name} sleeps for ${numberOfHr}`);
    }
  }
  */

  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numberOfHr: number) {
      console.log(`${this.name} sleeps for ${numberOfHr}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} takes ${numberOfClass} class(s)`);
    }
  }

  const student1 = new Student("Monika", 25, "Ctg");
  const teacher1 = new Teacher("Abul", 50, "Ctg", "General Teacher");
}
