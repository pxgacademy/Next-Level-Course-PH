"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_response = void 0;
const api_response = (res, status, isSuccess, message, data = null) => {
    return res.status(status).json({ isSuccess, message, data });
};
exports.api_response = api_response;
