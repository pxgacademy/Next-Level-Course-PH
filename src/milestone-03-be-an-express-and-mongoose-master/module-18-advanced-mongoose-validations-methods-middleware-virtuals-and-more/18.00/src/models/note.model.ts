import { model, Schema } from "mongoose";
import { NoteType } from "../interfaces/note.interface";

const noteSchema = new Schema<NoteType>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    pinned: { type: Boolean, default: false },
    category: {
      type: String,
      enum: ["Personal", "Business", "Study", "Gaming", "Others"],
      default: "Personal",
    },
    tags: {
      label: { type: String, required: true },
      color: {
        type: String,
        default: "green",
        enum: ["red", "blue", "green", "gray"],
      },
    },
  },
  { timestamps: true }
);

export const Note = model<NoteType>("Note", noteSchema);
