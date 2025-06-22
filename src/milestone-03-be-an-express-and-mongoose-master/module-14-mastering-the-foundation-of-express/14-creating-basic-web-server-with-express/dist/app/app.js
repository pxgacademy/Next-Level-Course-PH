"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_todos_1 = __importDefault(require("./todos/route.todos"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", route_todos_1.default);
app.get("/", (req, res) => {
    res.send("I am working from module 14.02");
});
exports.default = app;
