// cd src/milestone-03-be-an-express-and-mongoose-master/module-13-explore-node_js-core-modules

const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", (e) => {
  console.log("Class is finished!");
});

schoolBell.on("ring", (e) => {
  console.log("multiple listener with same name");
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

/*

function funcName(param) {
  console.log(param);
}

const funcName = (param) => {
  console.log(param);
  };

funcName("Abdullah");

schoolBell.on("funcName", (param) => {
  console.log(param);
  });
  
schoolBell.emit("funcName", "Abdullah");
    
*/
