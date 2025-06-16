{
  // POLYMORPHISM

  class Person {
    getSleep() {
      console.log("I sleep for 8 hr");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I sleep for 7 hr");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I sleep for 6 hr");
    }
  }

  const getSleepingHr = (param: Person) => {
    param.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepingHr(person);
  getSleepingHr(student);
  getSleepingHr(developer);

  //-----------------------------------------------

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(13, 17);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}
