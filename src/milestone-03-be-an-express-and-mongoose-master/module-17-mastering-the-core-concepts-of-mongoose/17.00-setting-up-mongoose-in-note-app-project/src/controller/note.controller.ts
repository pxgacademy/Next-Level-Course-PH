import { Request, Response, Router } from "express";
import { Note } from "../models/note.model";

const noteRouter = Router();

// create a note
noteRouter.post("/create-one", async (req: Request, res: Response) => {
  const body = req.body;
  const newNote = new Note(body);
  await newNote.save();

  res.status(201).json({
    success: true,
    message: "Successfully created!",
    data: newNote,
  });
});

// get all notes
noteRouter.get("/get-all", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

// get a single note
noteRouter.get("/get/:noteId", async (req: Request, res: Response) => {
  const id = req.params?.noteId;
  // const note = await Note.findOne({ _id: new mongoose.Types.ObjectId(id) });
  const note = await Note.findById(id);
  res.status(200).json(note);
});

// update a single note
noteRouter.patch("/update/:noteId", async (req: Request, res: Response) => {
  const id = req.params?.noteId;
  const body = req.body;

  // const result = await Note.findByIdAndUpdate(id, body, { new: true });
  // const result = await Note.updateOne({ _id: id }, body);
  const result = await Note.findOneAndUpdate({ _id: id }, body, { new: true });

  res.status(200).json(result);
});

// delete a single note
noteRouter.delete("/delete/:noteId", async (req: Request, res: Response) => {
  const id = req.params?.noteId;
  const result = await Note.findByIdAndDelete(id);
  // const result = await Note.findOneAndDelete({ _id: id });
  // const result = await Note.deleteOne({ _id: id });
  res.status(200).json(result);
});

export default noteRouter;
