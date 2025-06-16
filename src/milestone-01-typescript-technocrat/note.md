
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
### 💠 GENERIC INTERFACE ❗ IMPORTANT
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
### 💠 GENERIC FOR FUNCTION
```ts
  {
    const createArray = (param: string): string[] => {
      return [param];
    };
    const res1 = createArray("Ban");
  }

  const createArray = <T>(param: T): T[] => { // T is like a variable
    return [param];
  };

  const res1 = createArray<string>("Ban");
  const res2 = createArray<boolean>(false);
  const res3 = createArray<object>({});
  const res4 = createArray<{ name: string; age: number }>({
    name: "abul",
    age: 50,
  });

  interface User {
    name: string;
    age: number;
  }
  const res5 = createArray<User>({ name: "abul", age: 50 });

  // TUPLE

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Abul", 50);
  const res11 = createArrayWithTuple<string, User>("user", {
    name: "Abul",
    age: 50,
  });

  //

  const addCourse = <T>(student: T) => {
    const course: string = "Next Level Web Development";

    return { ...student, course };
  };

  const student1 = addCourse<{ name: string; age: number }>({
    name: "Abul",
    age: 50,
  });
```
### 💠 KEYOF OPERATOR
```ts
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
```
### 💠 ASYNCHRONOUS TYPESCRIPT | PROMISE
```ts
  // SIMULATE
  {
    const createPromise = (data?: string): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        if (data) resolve(data);
        else reject("failed to load data");
      });
    };

    // calling created promise function
    const showData = async () => {
      const res1: string = await createPromise("something");
      const res2: string = await createPromise();
      console.log({ res1, res2 });
    };

    showData();
  }

  {
    interface User {
      name: string;
      email: string;
      isAdmin: boolean;
    }

    const user = {
      name: "Abul",
      email: "abul@mail.com",
      isAdmin: false,
    };

    const createPromise = (data?: boolean): Promise<User | string> => {
      return new Promise<User | string>((resolve, reject) => {
        if (data) resolve(user);
        else reject("failed to load data");
      });
    };

    // calling created promise function
    const showData = async () => {
      const res1: User | string = await createPromise(true);
      const res2: User | string = await createPromise();
      console.log({ res1, res2 });
    };

    showData();
  }

  //

  interface ToDo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  const todo = getToDo();
  console.log(todo);
```
### 💠 CONDITIONAL TYPE
```ts
  type a = null;
  type b = undefined;

  type x = a extends null ? true : false; // conditional type
  type y = a extends null ? string : number;
  type z = a extends number ? number : b extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
  type HasTractor = CheckVehicle<"tractor">;
```
### 💠 MAPPED | MAP TYPE
```ts
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  // we can covert number[] to string[] using map
  const arrayOfString: string[] = arrayOfNumbers.map((num) => num.toString());
  // arrayOfString will return ["1", "2", "3", "4"]

  /*
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = { // typed manually | we can do in dynamically
    height: string;
    width: string;
  };

  // without typing manually, we will do it dynamically
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
  */

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type Height = AreaNumber["height"]; // look up type
  // Height returns: number

  type Area = {
    height: string;
    width: number;
  };

  type AreaStringGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area: AreaStringGeneric<Area> = {
    height: "100",
    width: 100,
  };

  /*
  type AreaStringGeneric<T> = {
    [key in keyof T]: T[key];
  };
  here T = Area
  T[key] = Area[height] = string
  T[key] = Area[width] = number
  tow times looped
  */
```
### 💠 UTILITY TYPE (PICK, OMIT, REQUIRED, PARTIAL, READONLY, RECORD)
```ts
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };
// 
  // 🔶 PICK
  type Name = Pick<Person, "name">;
  // type Name = { name: string }

  type NameAge = Pick<Person, "name" | "age">;
  // type NameAge = { name: string; age: number }

  // 🔶 OMIT
  type ContactInfo = Omit<Person, "name" | "age">;
  // type ContactInfo = { email?: string | undefined; phone: string }

  // 🔶 REQUIRED
  type PersonRequired = Required<Person>; // every key is required

  // 🔶 PARTIAL
  type PersonPartial = Partial<Person>; // every key is optional

  // 🔶 READONLY
  type PersonReadonly = Readonly<Person>; // every key is readonly, one time can assign

  const person1: PersonReadonly = {
    name: "Abul",
    age: 50,
    phone: "015546444",
  };

  // person1.name = "Babul"; // testing

  /*
  type MyObject = {
    a: string;
    b: string;
    };
    */

  // 🔶 RECORD
  type MyObject = Record<string, string>;
  // type MyObject = { [x: string]: string }

  const objectOne: MyObject = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
  };

  const emptyObject: Record<string, number> = {};
  const emptyObject2: Record<string, unknown> = {};
```

### What is **OOP**? (OBJECT ORIENTED PROGRAMMING)
A programming **paradigm** that organizes and models software
### What is **PARADIGM**?
The style used to write and organize code.
#### PROCEDURAL PROGRAMMING
**Procedural programming** is a coding approach that organizes a computer program into a set of structured procedures or functions. These procedures consist of a series of well-defined steps or instructions that are executed sequentially. However, it may lack the flexibility and reusability of more advanced programming paradigms.
#### FUNCTIONAL PROGRAMMING
**Functional programming** is like using a set of building blocks that are like mathematical functions. This helps in making your code easier to understand and less likely to have bugs.
#### DECLARATIVE PROGRAMMING
**Declarative programming** is an approach to writing computer programs that focuses on describing the desired outcome or result, rather than explicitly specifying the step-by-step instructions to achieve that outcome. In declarative programming, you define what you want to accomplish, and the underlying system or framework figures out how to achieve
#### OBJECT ORIENTED PROGRAMMING
**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code around objects, which are instances of classes defining data and behavior. In OOP, software is designed by modeling real-world entities as objects, each having attributes (data) and methods (functions) that operate on the data
#### EVENT DRIVEN PROGRAMMING
**Event-driven programming** is a programming paradigm that revolves around responding to events or signals generated by the system or user interactions. In event-driven programming, software is designed to wait for and react to events, such as user clicks, keyboard inputs, or system notifications.

### Building Blocks of OOP
- **INHERITANCE**
- **POLYMORPHISM**
- **ABSTRACTION**
- **ENCAPSULATION**

---
### 💠 OOP - CLASS
```ts
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} speak ${this.sound}`);
    }
  }
  const cat = new Animal("Catty", "Cat", "Mew Mew");
  cat.makeSound();

  // parameter properties
  // if you use parameter properties, compiler set the types and initialize the values
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} speak ${this.sound}`);
    }
  }

  const catty = new Animal2("Catty", "Cat", "Mew Mew");
  catty.makeSound();
```
### 💠 OOP - INHERITANCE
```ts
  /*
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHr: number) {
      console.log(`${this.name} sleeps for ${numberOfHr}`);
    }
  }
  */

  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numberOfHr: number) {
      console.log(`${this.name} sleeps for ${numberOfHr}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} takes ${numberOfClass} class(s)`);
    }
  }

  const student1 = new Student("Monika", 25, "Ctg");
  const teacher1 = new Teacher("Abul", 50, "Ctg", "General Teacher");
```
### 💠 TYPE GUARDS
```ts
  // TYPEOF GUARDS
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number")
      return param1 + param2;
    else return param1.toString() + param2.toString();
  };

  // IN GUARDS
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) return `Name is: ${user.name}, role is: ${user.role}`;
    else return `Name is: ${user.name}`;
  };
```
### 💠 INSTANCEOF GUARD
```ts
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I can make sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I can bark");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I can mewing");
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) animal.makeBark();
    else if (animal instanceof Cat) animal.makeMew();
    else animal.makeSound();
  };

  const dog = new Dog("The dog", "Gew");
  const cat = new Dog("The cat", "Mew");

  getAnimal(dog);
  getAnimal(cat);

  // smart way of handling instanceof using arrow function
  const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
  const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

  // type narrowing
  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) animal.makeBark();
    else if (isCat(animal)) animal.makeMew();
    else animal.makeSound();
  };

  getAnimal2(dog);
  getAnimal2(cat);
```
### 💠 ACCESS MODIFIERS (public, private, protected, readonly)
```ts
  class BankAccount {
    public readonly id: number; // only can read access from anywhere
    public name: string; // can access from anywhere
    private _oldBalance: number; // only can access into this class
    protected _balance: number; // only can access into this class and child class

    constructor(id: number, name: string, balance: number, oldBalance: number) {
      this.id = id;
      this.name = name;
      this._oldBalance = oldBalance;
      this._balance = balance;
    }

    addDeposit(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
      return this._balance;
    }

    withdraw(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance - amount;
      return this._balance;
    }

    oldBalance(): number {
      return this._oldBalance;
    }
  }

  class StudentAccount extends BankAccount {
    private rate: number;
    constructor(id: number, name: string, balance: number, rate: number) {
      super(id, name, balance, balance);
      this.rate = rate;
    }

    addFee(): number | string {
      if (this.rate <= 0.05) return this._balance * this.rate;
      return "Enter a valid amount";
    }
  }

  const account1 = new BankAccount(123, "Person1", 100000, 0);

  account1.addDeposit(1000);
  account1.withdraw(2000);
  account1.oldBalance();

  const studentAccount = new StudentAccount(133, "Person1", 100000, 0.06);
  studentAccount.oldBalance();
```
### 💠 GETTER and SETTER
```ts
  class BankAccount {
    public readonly id: number; // only can read access from anywhere
    public name: string; // can access from anywhere
    private _oldBalance: number; // only can access into this class
    protected _balance: number; // only can access into this class and child class

    constructor(id: number, name: string, balance: number, oldBalance: number) {
      this.id = id;
      this.name = name;
      this._oldBalance = oldBalance;
      this._balance = balance;
    }

    /*
    oldBalance(): number {
        return this._oldBalance;
    }
    */

    // getter
    get oldBalance() {
      return this._oldBalance;
    }

    /*
    addDeposit(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
      return this._balance;
    }
    */

    // setter
    set addDeposit(amount: number) {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
    }

    withdraw(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance - amount;
      return this._balance;
    }
  }

  const account1 = new BankAccount(123, "Person1", 100000, 100000);
  account1.addDeposit = 5000;
  console.log(account1.oldBalance);
```
### 💠 STATIC in OOP
```ts
  class Counter {
    static count: number = 0;

    increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  instance1.increment();

  const instance2 = new Counter();
  instance2.increment();

  Counter.decrement();
```
### 💠 POLYMORPHISM
```ts
  class Person {
    getSleep() {
      console.log("I sleep for 8 hr");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I sleep for 7 hr");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I sleep for 6 hr");
    }
  }

  const getSleepingHr = (param: Person) => {
    param.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepingHr(person);
  getSleepingHr(student);
  getSleepingHr(developer);

  //-----------------------------------------------

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(13, 17);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
```
### 💠 ABSTRACTION: 1. INTERFACE 2. ABSTRACT
```ts
  // INTERFACE
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

  // when class takes interface, Vehicle2
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

  // ABSTRACT
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
```
### 💠 ENCAPSULATION in OOP
```ts
  class BankAccount {
    public readonly id: number; // only can read access from anywhere
    public name: string; // can access from anywhere
    private _oldBalance: number; // only can access into this class
    protected _balance: number; // only can access into this class and child class

    constructor(id: number, name: string, balance: number, oldBalance: number) {
      this.id = id;
      this.name = name;
      this._oldBalance = oldBalance;
      this._balance = balance;
    }

    addDeposit(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance + amount;
      return this._balance;
    }

    withdraw(amount: number): number {
      this._oldBalance = this._balance;
      this._balance = this._balance - amount;
      return this._balance;
    }

    private oldBalance(): number {
      return this._oldBalance;
    }

    getOldBalance() {
      return this.oldBalance();
    }
  }

  const account1 = new BankAccount(123, "Person1", 100000, 100000);

  account1.addDeposit(1000);
  account1.withdraw(2000);

  class StudentAccount extends BankAccount {
    private rate: number;
    constructor(id: number, name: string, balance: number, rate: number) {
      super(id, name, balance, balance);
      this.rate = rate;
    }

    addFee(): number | string {
      if (this.rate <= 0.05) return this._balance * this.rate;
      return "Enter a valid amount";
    }
  }
```

