"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const todoFilePath_1 = require("../utils/todoFilePath");
const todoRouter = (0, express_1.Router)();
// get all todos
todoRouter.get("/all-todos", (req, res) => {
    console.log("filePath: ", todoFilePath_1.todoFilePath);
    const data = fs_1.default.readFileSync(todoFilePath_1.todoFilePath, { encoding: "utf-8" });
    res.status(200).json(data);
});
// create a single todos
todoRouter.post("/create-todo", (req, res) => {
    const data = req.body;
});
exports.default = todoRouter;
