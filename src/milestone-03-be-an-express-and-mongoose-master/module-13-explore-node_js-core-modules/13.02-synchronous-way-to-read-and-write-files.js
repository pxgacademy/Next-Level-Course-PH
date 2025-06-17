/*
1. synchronous
file read system - I/O intensive task -> single thread -> give response

2. asynchronous
file read system - single thread -> event loop -> thread pool -> give response
*/

const fs = require("fs");
const text = "Learning file system";

fs.writeFileSync("./text.txt", text);

const data = fs.readFileSync("./text.txt", { encoding: "utf-8" });

console.log(data);
