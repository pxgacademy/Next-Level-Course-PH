{
  // type
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

  // interface
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

  // js -> object, array -> object, function -> object

  //type
  type Roll1 = number[];
  const rollNumber: Roll1 = [1, 2, 3];

  // interface
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];

  // type
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  // interface
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
}
