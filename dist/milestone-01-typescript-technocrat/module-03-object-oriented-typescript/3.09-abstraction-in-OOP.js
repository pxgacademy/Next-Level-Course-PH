"use strict";
{
    // when object takes interface, Vehicle1
    const car = {
        name: "Toyota",
        model: 1983,
    };
    // when class takes interface, Vehicle2
    class Car1 {
        startEngine() {
            console.log("I am starting the engine");
        }
        stopEngine() {
            console.log("I stope the engine");
        }
        move() {
            return "I am moving the car";
        }
        test() {
            console.log("I am testing");
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // ABSTRACT
    class Car {
        test() {
            console.log("I am testing");
        }
    }
    class ToyotaCar extends Car {
        startEngine() {
            console.log("I am starting the engine");
        }
        stopEngine() {
            console.log("I stope the engine");
        }
        move() {
            return "I am moving the car";
        }
    }
    const toyotaCar2 = new ToyotaCar();
    toyotaCar2.startEngine();
    toyotaCar2.test();
    //
}
