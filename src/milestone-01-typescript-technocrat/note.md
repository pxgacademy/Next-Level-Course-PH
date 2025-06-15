
## What is TypeScript?
**TypeScript** is an **Object Oriented Programming Language** that is built on top of JavaScript with extra features.

## Why should use TypeScript?
### Lacking in JavaScript
 - Dynamically typed language

### When working in a large application with multiple developers
 - Very difficult to manage large codebase
 - Hard to find bugs
 - Catch errors only in runtime

### TypeScript code can be transpiled into older versions of JavaScript

### 🟢 Benefits of using TypeScript
- Support older browser
- Type safety
- Increase your productivity
- Less bugs and less testing

|JS types in TS | TS Own Types  |
|---------------|---------------|
|Number         | Interface     |
|String         | Void          |
|Boolean        | Array         |
|Null           | Tuple         |
|Undefined      | Enum          |
|Object         | Union         |
|Symbol         | Intersection  |

### 🔴 Drawbacks of using TypeScript 
- Type Complexities
- Limited Library Support
- Over Engineering
- Migration Challenge

---

### **Primitive** types and **Non-Primitive** types
|Primitive  | Non Primitive |
|-----------|---------------|
|number     | Array         |
|string     | Tuple         |
|boolean    | Object        |
|null       |               |
|undefined  |               |
|symbol     |               |


## EXAMPLES OF TYPESCRIPT TYPES
### 💠 BASIC DATA TYPES
```ts
  const myName = "Abdullah"; // implicit data type. ts infer the type based on value
  const secondName: string = "Al Mubin"; // Explicit data type

  // PRIMITIVE DATA TYPES
  const fullName: string = "Abdullah";
  const age: number = 25;
  const isMarried: boolean = false;
  const spouse: undefined = undefined;
  const bankBalance: null = null;

  // NON-PRIMITIVE DATA TYPES
  // Array
  const friends: string[] = ["Rakib", "Akib", "Sakib"];

  // Object
  const family: {
    readonly thana: string; // readonly type
    village: "Chipatoli"; // string literal type
    father: string;
    mother?: string; // optional type
    sibling: number;
  } = {
    thana: "Hathazari",
    village: "Chipatoli",
    father: "Abdul Mannan",
    sibling: 2,
  };

  // tuple | tuple is an array, it maintains type of values
  const coordinates: [number, number] = [7, 19];
  const x: [string, number] = ["Abdullah", 25];
  const y: [string, number, boolean] = ["Abdullah", 25, true];
```
### 💠 FUNCTION TYPES
```ts
  // 🔵 NORMAL FUNCTION | 🟢 ARROW FUNCTION

  // explicit parameter type
  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  const addition = add(5, 6);

  // explicit parameter and return type | here return must be a number
  function add2(num1: number, num2: number): number {
    return num1 + num2;
  }

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // METHOD TYPES
  const poorUser = {
    name: "Abdullah",
    balance: 1000,
    addBalance(num: number): number {
      return this.balance + num;
    },
  };

  // CALLBACK FUNCTION TYPES
  const arr: number[] = [1, 4, 10];
  const newArr: number[] = arr.map((elem: number): number => elem * elem);
```
### 💠 SPREAD OPERATOR 💠 REST OPERATOR
```ts
  // SPREAD OPERATOR
  const bros1: string[] = ["Rakib", "Sakib", "Akib"];
  const bros2: string[] = ["Sadia", "Anika", "Monika"];

  // bros1.push(bros2); // 🔴 wrong way
  bros1.push(...bros2); // 🟢 right way

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // REST OPERATOR
  const greetFriends = (...friends: string[]) => {
    return friends.forEach((friend: string) => {
      `Hi ${friend}`;
    });
  };
  const greetings = greetFriends("Abul", "Babul");
  console.log(greetings);
```
### 💠 DESTRUCTURING
```ts
  const student = {
    name: "Abul",
    roll: 988,
    subject: "History",
    present: false,
  };

  // 🟢 BASIC OBJECT DESTRUCTURING
  const { name, roll, subject, present } = student;

  const user = {
    id: 3256,
    name: {
      firstName: "Abul",
      middleName: "Babul",
      lastName: "Tabul",
    },
    contact: {
      phone: "01659455236",
      email: "abul@babul.com",
    },
    address: "Uganda",
  };

  // 🔵 COMPLEX OBJECT DESTRUCTURING
  const {
    id, // basic destructuring
    name: { firstName }, // destructure from name key
    address: country, // name alias | store address into country variable
    contact: { phone: call }, // destructure | name alias
  } = user;

  // 🟣 ARRAY DESTRUCTURING
  const friends = ["Abdul", "Babul", "Monica", "ross", "rachel"];

  const [, b, c, ...d] = friends;
```
### 💠 TYPE ALIAS
```ts
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
```
### 💠 UNION TYPE 💠 INTERSECTION TYPE
```ts
{
  // union type is like 'or' operator
  // 💠 UNION TYPE
  type FrontendDev = "Akib" | "Rakib";
  type BackendDev = "Abul" | "Babul";
  type Developer = FrontendDev | BackendDev;
  const newDev1: FrontendDev = "Akib";
  const newDev2: BackendDev = "Babul";
  const newDev3: Developer = "Babul";
  type User = {
    name: string;
    email: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "B+" | "A-";
  };
}
{
  // intersection type is like 'and' operator
  // 💠 INTERSECTION TYPE
  type FrontendDev = {
    skills: string[];
    designation: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullstackDev = FrontendDev & BackendDev;
  const fullstackDev: FullstackDev = {
    skills: ["HTML", "CSS"],
    designation: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
```
### 💠 TERNARY OPERATOR 💠 OPTIONAL CHAINING 💠 NULLISH COALESCING OPERATOR
```ts
  // TERNARY OPERATOR
  const age = 15;
  const isAdult = age > 18 ? "adult" : "not adult";

  // OPTIONAL CHAINING
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string; // optional type
    };
  };

  const user: User = {
    name: "Abdullah",
    address: {
      city: "ctg",
      road: "awesome road",
      presentAddress: "ctg road",
    },
  };

  const address = user?.address?.permanentAddress ?? "none"; // optional chaining

  // NULLISH COALESCING OPERATOR
  // null / undefined --> decision making

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest"; // it works only for null or undefined
```
### 💠 NULLABLE TYPE 💠 UNKNOWN TYPE 💠 NEVER TYPE
```ts
  // NULLABLE TYPE
  const searchName = (value: string | null) =>
    console.log(value ? "Searching" : "Nothing to search");

  searchName("abul");
  searchName(null);

  // UNKNOWN TYPE
  const getSpeedInMeterPerSecond = (value: unknown): void => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);

      //
    } else if (typeof value === "string") {
      const [v] = value.split(" ");
      const convertedSpeed = (parseFloat(v) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);

      //
    } else console.log("wrong input");
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond("1200 kmh^-1");
  getSpeedInMeterPerSecond(null);
  getSpeedInMeterPerSecond([32]);

  // NEVER TYPE
  // never type | this function never return any value
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
```
### 💠 TYPE ASSERTION
```ts
  // TYPE ASSERTION
  type KgToGm = (value: string | number) => string | number | undefined;

  const kgToGm: KgToGm = (value) => {
    if (typeof value === "string") return parseFloat(value) * 1000;
    return `The converted value is: ${value * 1000}`;
  };

  const res1 = kgToGm(10) as number; // set return type is number
  const res2 = kgToGm("10") as string; // set return type is string

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    const errorMessage = (error as CustomError).message;
  }
```
### 💠 TYPE ALIAS 💠 INTERFACE
```ts
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
```
### 💠 GENERIC TYPE 💠 GENERIC TUPLE
```ts
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
```
### 💠 GENERIC INTERFACE 🔺 IMPORTANT
```ts
  interface Developer<X, Z = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: X;
    bike?: Z;
  }

  interface WatchBrand1 {
    brand: string;
    model: string;
    display: string;
  }

  const developer1: Developer<WatchBrand1> = {
    name: "Abul",
    computer: {
      brand: "Dell",
      model: "S2h",
      releaseYear: 2011,
    },
    smartWatch: {
      brand: "X",
      model: "Y",
      display: "OLEd",
    },
  };

  interface WatchBrand2 {
    brand: string;
    model: string;
    heartTrack: boolean;
  }

  interface BikeBrand1 {
    model: string;
    engineCapacity: string;
  }

  const developer2: Developer<WatchBrand2, BikeBrand1> = {
    name: "Abul",
    computer: {
      brand: "Dell",
      model: "S2h",
      releaseYear: 2011,
    },
    smartWatch: {
      brand: "Z",
      model: "Y",
      heartTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
```