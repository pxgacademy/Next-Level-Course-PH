"use strict";
{
    // OOP - inheritance
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHr) {
            console.log(`${this.name} sleeps for ${numberOfHr}`);
        }
    }
    //
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    //
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} takes ${numberOfClass} class(s)`);
        }
    }
    const student1 = new Student("Monika", 25, "Ctg");
    const teacher1 = new Teacher("Abul", 50, "Ctg", "General Teacher");
    //
}
