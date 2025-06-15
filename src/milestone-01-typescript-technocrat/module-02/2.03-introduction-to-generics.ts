{
  // GENERIC TYPE

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [1, 2, 3, 4, 5];
  //   const rollNumber: Array<number> = [1, 2, 3, 4, 5];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

  //   const mentors: string[] = ["x", "y", "z"];
  //   const mentors: Array<string> = ["x", "y", "z"];
  const mentors: GenericArray<string> = ["x", "y", "z"];

  //   const boolArray: boolean[] = [false, true];
  //   const boolArray: Array<boolean> = [false, true];
  const boolArray: GenericArray<boolean> = [false, true];

  // const user: { name: string; age: number }[] = [
  //   {
  //     name: "Abdul",
  //     age: 50,
  //   },
  // ];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Abdul",
      age: 50,
    },
    {
      name: "Monika",
      age: 35,
    },
  ];

  interface User2 {
    name: string;
    age: number;
  }

  const user2: GenericArray<User2> = [
    {
      name: "Abdul",
      age: 50,
    },
    {
      name: "Monika",
      age: 35,
    },
  ];

  // GENERIC TUPLE

  type GenericTuple<X, Y> = [X, Y];

  const man: GenericTuple<string, string> = ["XY", "YZ"];

  const men: GenericTuple<number, { name: string; email: string }> = [
    1245,
    { name: "Abul", email: "a@gmail.com" },
  ];
}
