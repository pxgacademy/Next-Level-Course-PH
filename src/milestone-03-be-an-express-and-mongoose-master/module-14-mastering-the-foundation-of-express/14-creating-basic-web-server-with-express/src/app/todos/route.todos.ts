import { Request, Response, Router } from "express";
import fs from "fs";
import { todoFilePath } from "../utils/todoFilePath";

const todoRouter = Router();

// get all todos
todoRouter.get("/all-todos", (req: Request, res: Response) => {
  console.log("filePath: ", todoFilePath);
  const data = fs.readFileSync(todoFilePath, { encoding: "utf-8" });
  res.status(200).json(data);
});

// create a single todos
todoRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
});

export default todoRouter;
