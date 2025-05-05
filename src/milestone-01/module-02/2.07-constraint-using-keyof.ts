{
  // generic constraints with keyof operator

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;

  const person1: Owner = "bike";
  const person2: Owner2 = "bike";

  //

  //   function getValue(obj: object, key: string) {
  //     return obj[key];
  //   }

  function getValue<X, Z extends keyof X>(obj: X, key: Z) {
    return obj[key];
  }

  const user: {
    name: string;
    email: string;
  } = {
    name: "Abdul",
    email: "abul@babul.com",
  };

  const value = getValue(user, "name");

  //
}
