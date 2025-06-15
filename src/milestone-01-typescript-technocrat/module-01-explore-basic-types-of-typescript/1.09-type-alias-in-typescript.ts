{
  // TYPE ALIAS

  // OBJECT TYPE ALIAS
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Abdullah",
    age: 25,
    gender: "Male",
    contactNo: "465467987",
    address: "Bangladesh",
  };

  const student2: Student = {
    name: "Abul",
    age: 25,
    gender: "Male",
    address: "Bangladesh",
  };

  // STRING TYPE ALIAS
  type Name = string;
  const username: Name = "Abdullah";
  const studentName: Name = "Abul";

  // FUNCTION TYPE ALIAS
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
