import { Model, model, Schema } from "mongoose";
import {
  AddressType,
  UserPasswordInstanceMethod,
  UserPasswordStaticMethod,
  UserType,
} from "../interfaces/user.interface";
import validator from "validator";
import bcrypt from "bcryptjs";
import { Note } from "./note.model";

const AddressSchema = new Schema<AddressType>(
  {
    city: { type: String },
    street: { type: String },
    zip: { type: String },
  },
  { _id: false }
);

const userSchema = new Schema<
  UserType,
  UserPasswordStaticMethod,
  UserPasswordInstanceMethod
>(
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

      /*
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please, enter a valid email address",
      ],

      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please, enter a valid email address",
      },
      */

      validate: [validator.isEmail, "Please, enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^(?:\+8801|8801|01)[3-9]\d{8}$/,
        "Please, enter a valid phone number",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        /^.{6,}$/,
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      ],
    },
    role: {
      type: String,
      lowercase: true,
      enum: {
        values: ["user", "admin"],
        message: "Enter a valid role, {VALUE} is not allowed",
      },
      default: "user",
    },
    address: AddressSchema,
  },
  { timestamps: true }
);

// instance method
userSchema.method("hashPasswordByInstance", async function (password) {
  this.password = await bcrypt.hash(password, 10);
  return this.save();
});

// static method
userSchema.static("hashPasswordByStatic", async function (password) {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
});

// Pre middleware functions
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// Post middleware functions
userSchema.post("save", function () {
  console.log("after saving data");
});

// Post hook | delete all notes after deleting the user who created the notes
userSchema.post("findOneAndDelete", async function (doc) {
  if (!doc?._id) return;
  await Note.deleteMany({ userId: doc._id });
});

export const User = model<UserType, UserPasswordStaticMethod>(
  "User",
  userSchema
);
