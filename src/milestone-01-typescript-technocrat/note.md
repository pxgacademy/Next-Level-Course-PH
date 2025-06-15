
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


### EXAMPLES OF TYPESCRIPT TYPES
```ts
{
  // Basic Data Types
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
    readonly thana: string; // literal type
    village: "Chipatoli"; // literal type
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
}

{
  // FUNCTION TYPES
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
}

{
  // ✅ SPREAD OPERATOR | ✅ REST OPERATOR

  // learn spread operator
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

  // learn rest operator
  const greetFriends = (...friends: string[]) => {
    return friends.forEach((friend: string) => {
      `Hi ${friend}`;
    });
  };
  const greetings = greetFriends("Abul", "Babul");
  console.log(greetings);
}

{
  // DESTRUCTURING

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
}


```
