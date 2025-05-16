// function

// Normal function
// Arrow function

// explicit parameter type
function add(num1: number, num2: number) {
  return num1 + num2;
}

const addition = add(5, 6);
console.log(addition);

// explicit parameter and return type | here return must be a number
function add2(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

//
const poorUser = {
  name: "Abdullah",
  balance: 1000,
  addBalance(num: number): number {
    return this.balance + num;
  },
};

const arr: number[] = [1, 4, 10];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
