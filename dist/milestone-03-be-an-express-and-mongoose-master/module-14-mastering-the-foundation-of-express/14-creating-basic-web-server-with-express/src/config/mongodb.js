"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb://localhost:27017/todosDB";
// const uri: string =
//   "mongodb+srv://mongodb_testing:oVXvWyrF5lw0dONc@cluster0.uioun.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
