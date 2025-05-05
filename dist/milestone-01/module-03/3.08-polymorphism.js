"use strict";
{
    // Polymorphism
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
    const getSleepingHr = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    //   getSleepingHr(person1);
    //   getSleepingHr(person2);
    //   getSleepingHr(person3);
    //
}
{
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(13, 17);
    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
}
