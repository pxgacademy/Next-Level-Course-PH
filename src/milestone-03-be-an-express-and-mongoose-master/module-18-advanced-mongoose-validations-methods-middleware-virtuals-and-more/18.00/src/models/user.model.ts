import { model, Schema } from "mongoose";
import { UserType } from "../interfaces/user.interface";

const userSchema = new Schema<UserType>(
  {
    name: {
      firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Age should be at least 18, got {VALUE}"],
      max: [60, "Age should be less than 60, got {VALUE}"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please, enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      ],
    },
    role: {
      type: String,
      lowercase: true,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
