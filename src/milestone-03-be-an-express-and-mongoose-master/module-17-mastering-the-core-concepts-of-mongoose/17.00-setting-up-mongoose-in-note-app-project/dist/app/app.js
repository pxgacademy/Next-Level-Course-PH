"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_controller_1 = __importDefault(require("../controller/note.controller"));
const blog_controller_1 = __importDefault(require("../controller/blog.controller"));
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/notes", note_controller_1.default);
app.use("/blogs", blog_controller_1.default);
app.use("/users", user_controller_1.default);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to note app");
});
exports.default = app;
