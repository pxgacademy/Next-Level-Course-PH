"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponse = void 0;
const apiResponse = (res, statusCode, isSuccess, message, data = null) => {
    const response = {
        isSuccess,
        message,
        data,
    };
    return res.status(statusCode).json(response);
};
exports.apiResponse = apiResponse;
