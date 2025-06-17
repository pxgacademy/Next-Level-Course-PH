/*

 STREAM and BUFFER
 -------------------
 
 It is used to process a data piece by piece which is called buffer
 
 * It is better in terms of user experience
 * Needs short memory storage as it do not complete whole process at once.
 
 Different types of streams
 ----------------------------
 
 1. Readable Stream: a stream where we can read data (ex. http req, fs.readStream)
 2. Writable Stream: a stream where we can write data (ex. http res, fs.writeStream)
 3. Duplex Stream: a stream for both write and read
 4. Transform Stream: a stream where can we reshape data

*/

const fs = require("fs");

/*{
  fs.readFile("./read-text.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) return console.log("Error from reading file:", err);

    fs.writeFile("./text.txt", data, { encoding: "utf-8" }, (err) => {
      if (err) return console.log("Error from writing file:", err);

      console.log("Written successfully");
    });
  });
}*/

const readStream = fs.createReadStream("./read-text.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./text.txt", { encoding: "utf-8" });

// read data
readStream.on("data", (data) => {
  // write data
  writeStream.write(data, (err) => {
    // error handling
    if (err) throw Error("Error", err);
  });
});

// error handling
readStream.on("error", (err) => {
  if (err) throw Error("Error", err);
});

// handle ending read stream
readStream.on("end", () => {
  console.log("reading ended");
  writeStream.end();
});

// handle finish write stream
writeStream.on("finish", () => {
  console.log("written successfully");
});
