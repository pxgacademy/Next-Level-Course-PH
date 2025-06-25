import { Types } from "mongoose";

export interface NoteType {
  title: string;
  description: string;
  pinned: boolean;
  category: "Personal" | "Business" | "Study" | "Gaming" | "Others";
  tags: {
    label: string;
    color: "red" | "blue" | "green" | "gray";
  };
  userId: Types.ObjectId;
}
