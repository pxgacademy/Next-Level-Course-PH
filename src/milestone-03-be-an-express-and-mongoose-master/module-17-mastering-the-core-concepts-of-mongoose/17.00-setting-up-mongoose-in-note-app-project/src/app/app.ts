import express, { Application, Request, Response } from "express";
import noteRouter from "../controller/note.controller";
import blogRouter from "../controller/blog.controller";

const app: Application = express();
app.use(express.json());

app.use("/notes", noteRouter);
app.use("/blogs", blogRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to note app");
});

export default app;
