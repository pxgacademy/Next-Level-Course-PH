const fs = require("fs");

const text = "Learning asynchronous file system";

fs.writeFile("./text.txt", text, { encoding: "utf8" }, (err) => {
  // { encoding: "utf8" } is optional
  if (err) return console.log(err);
  console.log("completed writing");
});

fs.readFile("./text.txt", { encoding: "utf8" }, (err, data) => {
  if (err) return console.log(err);
  console.log("Data:", data);
});
