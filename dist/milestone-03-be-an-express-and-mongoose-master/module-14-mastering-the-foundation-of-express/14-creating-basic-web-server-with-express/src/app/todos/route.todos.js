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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
const todoRouter = (0, express_1.Router)();
// get all todos
todoRouter.get("/all-todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const todos = collection.find().toArray();
    res.status(200).json(todos);
}));
// create a single todos
todoRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const result = yield collection.insertOne(data);
    res.status(201).json(result);
}));
// delete a single todos
todoRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const result = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(result);
}));
// update isCompleted status
todoRouter.patch("/update-todo-status/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const result = yield collection.updateOne({ _id: new mongodb_2.ObjectId(id) }, { $set: body });
    res.json(result);
}));
// update a single todos
todoRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const result = yield collection.updateOne({ _id: new mongodb_2.ObjectId(id) }, { $set: body }, { upsert: true });
    res.json(result);
}));
exports.default = todoRouter;
