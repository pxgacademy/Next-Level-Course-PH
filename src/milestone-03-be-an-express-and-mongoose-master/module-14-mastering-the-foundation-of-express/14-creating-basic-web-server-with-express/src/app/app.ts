import express, { Application, Request, Response, Router } from "express";
import todoRouter from "./todos/route.todos";
const app: Application = express();

app.use(express.json());
app.use("/todos", todoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("I am working from module 14.02");
});

export default app;
