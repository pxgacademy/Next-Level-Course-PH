
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


### Examples of basic TS types
```ts
// Basic Data Types
const myName = "Abdullah"; // implicit data type. ts infer the type based on value
const secondName: string = "Al Mubin"; // Explicit data type

// Primitive data types
const fullName: string = "Abdullah";
const age: number = 25;
const isMarried: boolean = false;
const spouse: undefined = undefined;
const bankBalance: null = null;

// Non Primitive data types

// Array
const friends: string[] = ["Rakib", "Akib", "Sakib"];

// Object
const family: {
  readonly thana: string; // readonly type
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

type User = {
  company: "New Company"; // literal type
  year: 2025; // literal type
  readonly creator: string; // readonly type, only read access
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
};

// tuple | tuple is an array, it maintains type of values
const coordinates: [number, number] = [7, 19];
const x: [string, number] = ["Abdullah", 25];
const y: [string, number, boolean] = ["Abdullah", 25, true];
```
