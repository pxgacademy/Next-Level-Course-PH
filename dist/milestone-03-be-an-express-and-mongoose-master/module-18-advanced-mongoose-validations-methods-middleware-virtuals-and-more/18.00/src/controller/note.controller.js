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
const note_model_1 = require("../models/note.model");
const noteRouter = (0, express_1.Router)();
// create a note
noteRouter.post("/create-one", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newNote = new note_model_1.Note(body);
    yield newNote.save();
    res.status(201).json({
        success: true,
        message: "Successfully created!",
        data: newNote,
    });
}));
// get all notes
noteRouter.get("/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const notes = await Note.find().populate("userId");
    // const notes = await Note.find().populate({path: "userId", select: "-password"});
    const notes = yield note_model_1.Note.find().populate({
        path: "userId",
        select: "name email phone",
    });
    res.status(200).json(notes);
}));
// get a single note
noteRouter.get("/get/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.noteId;
    // const note = await Note.findOne({ _id: new mongoose.Types.ObjectId(id) });
    const note = yield note_model_1.Note.findById(id);
    res.status(200).json(note);
}));
// update a single note
noteRouter.patch("/update/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.noteId;
    const body = req.body;
    // const result = await Note.findByIdAndUpdate(id, body, { new: true });
    // const result = await Note.updateOne({ _id: id }, body);
    const result = yield note_model_1.Note.findOneAndUpdate({ _id: id }, body, { new: true });
    res.status(200).json(result);
}));
// delete a single note
noteRouter.delete("/delete/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.noteId;
    const result = yield note_model_1.Note.findByIdAndDelete(id);
    // const result = await Note.findOneAndDelete({ _id: id });
    // const result = await Note.deleteOne({ _id: id });
    res.status(200).json(result);
}));
exports.default = noteRouter;
