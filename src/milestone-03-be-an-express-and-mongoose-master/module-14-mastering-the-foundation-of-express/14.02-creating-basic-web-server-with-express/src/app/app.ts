import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("I am working from module 14.02");
});

export default app;
