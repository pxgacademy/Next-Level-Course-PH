"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoFilePath = void 0;
const path_1 = __importDefault(require("path"));
exports.todoFilePath = path_1.default.resolve(__dirname, "../../../db/todo.json");
