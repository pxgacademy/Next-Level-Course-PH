// synchronous

const { error } = require("console");
const fs = require("fs");

const text = "Learning file system";

fs.writeFileSync("./test.txt", text);

const data = fs.readFileSync("./test.txt", { encoding: "utf8" });

// console.log(data);

// asynchronous

fs.readFile("./test.txt", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
