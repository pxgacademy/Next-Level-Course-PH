const path = require("path");
const fs = require("fs");

// const inputArguments = process.argv?.slice(2);
// const text = inputArguments?.join(" ");

const text = process.argv.slice(2).join(" ");
const timestamp = new Date().toString();
const filePath = path.join(__dirname, "log.txt");

if (!text) {
  console.log(
    "please provide a message to log, ex.: node index.js Hello World"
  );
  process.exit(1);
}

const decoratedText = `${timestamp}
${text}
`;

fs.appendFile(filePath, decoratedText, { encoding: "utf-8" }, () => {
  console.log("your log added successfully!");
});
