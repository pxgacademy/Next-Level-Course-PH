const http = require("http");
const path = require("path");
const fs = require("fs");

/*

// my code, when I am learning

const filePath = path.join(__dirname, "db/todo.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // get all todos: GET
  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }

  // create todo: POST
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const todo = JSON.parse(data);
      todo.createdAt = new Date().toLocaleString();

      const parseTodos = JSON.parse(allTodos);
      parseTodos.push(todo);

      const newTodos = JSON.stringify(parseTodos, null, 2);

      fs.writeFileSync(filePath, newTodos, { encoding: "utf-8" });

      res.writeHead(201, { "content-type": "text/plain" });
      return res.end("Todo created successfully");
    });
  }
  // get a single todo: GET
  else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseTodos = JSON.parse(allTodos);

    const todo = parseTodos?.find((todo) => todo.title === title);

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify(todo));
  }
  // update a single todo: PATCH
  else if (pathname === "/todo/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");

    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseTodos = JSON.parse(allTodos);

      const todo = JSON.parse(data);

      const todoIndex = parseTodos.findIndex((todo) => todo.title === title);

      if (todoIndex >= 0) {
        parseTodos[todoIndex] = todo;

        const updatedTodos = JSON.stringify(parseTodos, null, 2);

        fs.writeFileSync(filePath, updatedTodos, { encoding: "utf-8" });

        res.writeHead(201, { "content-type": "text/plain" });
        return res.end("Updated successfully!");
      } else {
        res.writeHead(404, { "content-type": "text/plain" });
        return res.end("Title not found!");
      }
    });
  }
  // delete a single todo: DELETE
  else if (pathname === "/todo/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseTodos = JSON.parse(allTodos);

    const filteredTodos = parseTodos.filter((todo) => todo.title !== title);

    const updatedTodos = JSON.stringify(filteredTodos, null, 2);

    fs.writeFileSync(filePath, updatedTodos, { encoding: "utf-8" });

    res.writeHead(201, { "content-type": "text/plain" });
    return res.end("Deleted successfully!");
  }
  //
  else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ server listening to port 5000");
});
*/

//

const filePath = path.join(__dirname, "db/todo.json");

// Helper: Read all todos
const readTodos = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Helper: Write all todos
const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
};

// Helper: Send response
const sendResponse = (
  res,
  statusCode,
  data,
  contentType = "application/json"
) => {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(contentType === "application/json" ? JSON.stringify(data) : data);
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;

  //  GET all todos
  if (pathname === "/todos" && method === "GET") {
    const todos = readTodos();
    return sendResponse(res, 200, todos);
  }

  //  GET single todo by title
  if (pathname === "/todo" && method === "GET") {
    const title = url.searchParams.get("title");
    const todo = readTodos().find((t) => t.title === title);
    return sendResponse(res, 200, todo || { error: "Todo not found" });
  }

  //  POST: create new todo
  if (pathname === "/todos/create-todo" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const todo = JSON.parse(body);
        todo.createdAt = new Date().toLocaleString();

        const todos = readTodos();
        todos.push(todo);
        writeTodos(todos);

        return sendResponse(
          res,
          201,
          "Todo created successfully",
          "text/plain"
        );
      } catch (err) {
        return sendResponse(res, 400, "Invalid JSON", "text/plain");
      }
    });
    return;
  }

  //  PATCH: update a todo
  if (pathname === "/todo/update-todo" && method === "PATCH") {
    const title = url.searchParams.get("title");
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const updated = JSON.parse(body);
        const todos = readTodos();
        const index = todos.findIndex((t) => t.title === title);

        if (index >= 0) {
          todos[index] = updated;
          writeTodos(todos);
          return sendResponse(res, 200, "Updated successfully", "text/plain");
        } else {
          return sendResponse(res, 404, "Title not found", "text/plain");
        }
      } catch {
        return sendResponse(res, 400, "Invalid JSON", "text/plain");
      }
    });
    return;
  }

  //  DELETE a todo
  if (pathname === "/todo/delete-todo" && method === "DELETE") {
    const title = url.searchParams.get("title");
    const todos = readTodos();
    const filtered = todos.filter((t) => t.title !== title);
    writeTodos(filtered);
    return sendResponse(res, 200, "Deleted successfully", "text/plain");
  }

  //  Route not found
  return sendResponse(res, 404, "Route not found", "text/plain");
});

server.listen(5000, () => {
  console.log("✅ Server running on http://127.0.0.1:5000");
});
