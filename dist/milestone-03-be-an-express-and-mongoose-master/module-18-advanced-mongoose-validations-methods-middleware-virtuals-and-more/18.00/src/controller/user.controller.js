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
const zod_1 = require("zod");
const userRouter = (0, express_1.Router)();
// zod validation
const UserZodSchema = zod_1.z.object({
    name: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
    }),
    age: zod_1.z.number(),
    email: zod_1.z.string().email("Invalid email address"),
    phone: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().optional(),
    address: zod_1.z.object({
        city: zod_1.z.string(),
        street: zod_1.z.string(),
        zip: zod_1.z.string(),
    }),
});
//
// create a single user
userRouter.post("/create-one", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = yield UserZodSchema.parseAsync(req.body);
        const existingUser = yield user_model_1.User.findOne({ email: body === null || body === void 0 ? void 0 : body.email });
        if (existingUser) {
            (0, api_response_1.api_response)(res, 409, false, "User already exist");
            return;
        }
        /*
        const hashedPass = await bcrypt.hash(body.password, 10);
        body.password = hashedPass;
        const user = await User.create(body);
        */
        /*
        const user = new User(body);
        user.hashPasswordByInstance(body.password);
        const result = await user.save();
        */
        // body.password = await User.hashPasswordByStatic(body.password);
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
        // const result = await User.findByIdAndDelete(id);
        const result = yield user_model_1.User.findOneAndDelete({ _id: id });
        (0, api_response_1.api_response)(res, 200, true, "User successfully deleted!", result);
    }
    catch (error) {
        (0, api_response_1.api_response)(res, 500, false, "Internal server error", error === null || error === void 0 ? void 0 : error.message);
    }
}));
exports.default = userRouter;
