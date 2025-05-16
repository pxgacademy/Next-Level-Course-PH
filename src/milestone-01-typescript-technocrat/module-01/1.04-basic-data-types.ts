// Basic Data Types
const theName = "Abdullah"; // implicit data type
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
