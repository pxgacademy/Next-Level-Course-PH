"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const todoFilePath = path_1.default.resolve(__dirname, "../../db/todo.json");
app.get("/", (req, res) => {
    console.log(__dirname);
    res.send("I am working from module 14.02");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(todoFilePath, { encoding: "utf-8" });
    res.status(200).json(data);
});
exports.default = app;
