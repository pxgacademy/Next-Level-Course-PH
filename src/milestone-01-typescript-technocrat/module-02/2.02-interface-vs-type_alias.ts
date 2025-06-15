{
  // 💠 TYPE ALIAS | 💠 INTERFACE

  // TYPE ALIAS FOR OBJECT
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole = User1 & { role: string };

  const user1: UserWithRole = {
    name: "Abul",
    age: 58,
    role: "Manager",
  };

  // INTERFACE FOR OBJECT
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Monika",
    age: 25,
    role: "Manager",
  };

  // TYPE ALIAS FOR ARRAY
  type Roll = number[];
  const rollNumber: Roll = [1, 2, 3];

  // INTERFACE FOR ARRAY
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];

  /*
  rollNumber2: Roll2 = [1, 2, 3];
                        ⬇  ⬇  ⬇
        index of array  0  1  2
                     
  interface Roll2 { [index: number]: number }
                       ⬇      ⬇        ⬇
                     index  type   valueType
                       ⬇
                     index of the array, index will be number type
  */

  interface Friends {
    [index: number]: string;
  }
  const friends: Friends = ["Abul", "Babul", "Atiqur"];

  // TYPE ALIAS FOR FUNCTION
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  // INTERFACE FOR FUNCTION
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
}
