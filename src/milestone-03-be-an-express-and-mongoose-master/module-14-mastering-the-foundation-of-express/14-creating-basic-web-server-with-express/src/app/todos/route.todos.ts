import { Request, Response } from "express";
import fs from "fs";
import { todoRouter } from "../app";
import { todoFilePath } from "../utils/todoFilePath";

// get all todos
todoRouter.get("/all-todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(todoFilePath, { encoding: "utf-8" });
  res.status(200).json(data);
});

// create a single todos
todoRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
});
