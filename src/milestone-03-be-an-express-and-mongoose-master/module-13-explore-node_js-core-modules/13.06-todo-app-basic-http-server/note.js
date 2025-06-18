const { demoData } = require("./demo.data.js");
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log({ req });
  //   res.end("Welcome to todo app server");

  if (req.url === "/todos" && req.method === "GET") {
    // res.setHeaders("content-type", "text/plain");
    // res.setHeaders("email", "ph@mail.com");
    // res.statusCode = 201;
    res.writeHead(200, {
      //   "content-type": "text/plain",
      //   "content-type": "application/json",
      "content-type": "text/html",
      //   email: "ph@mail.com",
    });
    // res.end(JSON.stringify('All todos'));
    // res.end(JSON.stringify(demoData));
    res.end(
      `<h1 style="color:red">Hello h1</h1><h2>Hello h2</h2><h3>Hello h3</h3>`
    );
  } else if (req.url === "/todos/create-todo" && req.method === "POST")
    res.end("Todo created");
  else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ server listening to port 5000");
});

/**
 * todos - GET - all todos
 * todos/create-todo - POST - create todo
 *
 */
