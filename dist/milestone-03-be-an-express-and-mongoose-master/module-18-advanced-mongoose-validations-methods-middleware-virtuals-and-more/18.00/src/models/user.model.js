"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const note_model_1 = require("./note.model");
const AddressSchema = new mongoose_1.Schema({
    city: { type: String },
    street: { type: String },
    zip: { type: String },
}, { _id: false });
const userSchema = new mongoose_1.Schema({
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
        validate: [validator_1.default.isEmail, "Please, enter a valid email address"],
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
}, { timestamps: true });
// instance method
userSchema.method("hashPasswordByInstance", function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcryptjs_1.default.hash(password, 10);
        return this.save();
    });
});
// static method
userSchema.static("hashPasswordByStatic", function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashed = yield bcryptjs_1.default.hash(password, 10);
        return hashed;
    });
});
// Pre middleware functions
userSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcryptjs_1.default.hash(this.password, 10);
    });
});
// Post middleware functions
userSchema.post("save", function () {
    console.log("after saving data");
});
// Post hook | delete all notes after deleting the user who created the notes
userSchema.post("findOneAndDelete", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(doc === null || doc === void 0 ? void 0 : doc._id))
            return;
        yield note_model_1.Note.deleteMany({ userId: doc._id });
    });
});
exports.User = (0, mongoose_1.model)("User", userSchema);
