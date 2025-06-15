{
  // KEYOF OPERATOR

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle; // getting keys of Vehicle, like: "bike" | "car" | "ship"

  const person1: Owner = "bike";
  const person2: Owner2 = "car";

  interface User {
    name: string;
    email: string;
  }

  const user: User = {
    name: "Abdul",
    email: "abul@babul.com",
  };

  /*
  function getPropertyValue(obj: object, key: string) {
    return obj[key];
  }
    
  const value = getPropertyValue(user, "name");
  */

  function getPropertyValue<X, Z extends keyof X>(obj: X, key: Z) {
    return obj[key];
  }

  const value = getPropertyValue(user, "name");
}
