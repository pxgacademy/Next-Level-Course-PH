import { model, Schema } from "mongoose";
import { UserType } from "../interfaces/user.interface";

const userSchema = new Schema<UserType>(
  {
    name: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
