const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", (e) => {
  console.log("Class is finished!");
  console.log(e);
});

schoolBell.on("broken", () => {
  console.log("Bell has been broken");
});

const student = {
  name: "Abdullah",
  age: 28,
};

schoolBell.emit("ring", student);
schoolBell.emit("broken");

// src/milestone-03/module-13
