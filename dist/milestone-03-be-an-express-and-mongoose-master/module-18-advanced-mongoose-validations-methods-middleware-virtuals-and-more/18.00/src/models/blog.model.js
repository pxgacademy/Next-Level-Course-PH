"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
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
}, { timestamps: true });
exports.Blog = (0, mongoose_1.model)("Blog", blogSchema);
