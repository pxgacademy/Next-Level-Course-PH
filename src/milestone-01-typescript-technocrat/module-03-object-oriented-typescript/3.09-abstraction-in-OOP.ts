{
  // abstraction : 1. interface 2. abstract

  interface Vehicle1 {
    name: string;
    model: number;
  }

  // when object takes interface, Vehicle1
  const car: Vehicle1 = {
    name: "Toyota",
    model: 1983,
  };

  // ==========================

  interface Vehicle2 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // when class takes interface, Vehicle1
  class Car1 implements Vehicle2 {
    startEngine(): void {
      console.log("I am starting the engine");
    }

    stopEngine(): void {
      console.log("I stope the engine");
    }

    move(): string {
      return "I am moving the car";
    }

    test() {
      console.log("I am testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class
  abstract class Car {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am testing");
    }
  }

  class ToyotaCar extends Car {
    startEngine(): void {
      console.log("I am starting the engine");
    }

    stopEngine(): void {
      console.log("I stope the engine");
    }

    move(): string {
      return "I am moving the car";
    }
  }

  const toyotaCar2 = new ToyotaCar();
  toyotaCar2.startEngine();
  toyotaCar2.test();

  //
}
