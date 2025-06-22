import express, { Application, Request, Response, Router } from "express";
const app: Application = express();

export const todoRouter = Router();
export const userRouter = Router();

app.use(express.json());
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("I am working from module 14.02");
});

export default app;
