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
const user_model_1 = require("../models/user.model");
const api_response_1 = require("../components/api_response");
const userRouter = (0, express_1.Router)();
// create a single user
userRouter.post("/create-one", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const existingUser = yield user_model_1.User.findOne({ email: body === null || body === void 0 ? void 0 : body.email });
        if (existingUser) {
            (0, api_response_1.api_response)(res, 409, false, "User already exist");
            return;
        }
        const user = yield user_model_1.User.create(body);
        (0, api_response_1.api_response)(res, 201, true, "User created successfully", user);
    }
    catch (error) {
        (0, api_response_1.api_response)(res, 500, false, "Internal server error", error === null || error === void 0 ? void 0 : error.message);
    }
}));
// get all users
userRouter.get("/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find();
        (0, api_response_1.api_response)(res, 200, true, "Successfully got the users", users);
    }
    catch (error) {
        (0, api_response_1.api_response)(res, 500, false, "Internal server error", error === null || error === void 0 ? void 0 : error.message);
    }
}));
// update a single user
userRouter.patch("/update/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.userId;
    const body = req.body;
    try {
        const result = yield user_model_1.User.findByIdAndUpdate(id, body, { new: true });
        (0, api_response_1.api_response)(res, 201, true, "Successfully updated the users", result);
    }
    catch (error) {
        (0, api_response_1.api_response)(res, 500, false, "Internal server error", error === null || error === void 0 ? void 0 : error.message);
    }
}));
// delete a single user
userRouter.delete("/delete/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.userId;
    try {
        const result = yield user_model_1.User.findByIdAndDelete(id);
        (0, api_response_1.api_response)(res, 200, true, "User successfully deleted!", result);
    }
    catch (error) {
        (0, api_response_1.api_response)(res, 500, false, "Internal server error", error === null || error === void 0 ? void 0 : error.message);
    }
}));
exports.default = userRouter;
