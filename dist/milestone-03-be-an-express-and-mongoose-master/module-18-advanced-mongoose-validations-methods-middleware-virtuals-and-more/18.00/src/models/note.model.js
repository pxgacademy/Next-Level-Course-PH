"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
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
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
