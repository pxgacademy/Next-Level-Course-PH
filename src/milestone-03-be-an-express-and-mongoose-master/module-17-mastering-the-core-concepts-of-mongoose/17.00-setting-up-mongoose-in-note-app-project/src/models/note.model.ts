import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    pinned: { type: Boolean, default: false },
    category: {
      type: String,
      enum: ["Personal", "Business", "Study", "Gaming"],
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

export const Note = model("Note", noteSchema);
