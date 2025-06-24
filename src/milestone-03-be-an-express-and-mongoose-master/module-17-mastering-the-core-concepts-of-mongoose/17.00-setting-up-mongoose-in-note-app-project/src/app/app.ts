import express, { Application, Request, Response } from "express";
import mongoose, { Schema } from "mongoose";

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  const newNote = new Note(body);
  await newNote.save();
  console.log({ body });

  res.status(201).json({
    success: true,
    message: "Successfully created!",
    data: newNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to note app");
});

export default app;
