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
{
    // PROMISE
    // ASYNCHRONOUS TYPESCRIPT
    // SIMULATE
    {
        const createPromise = (data) => {
            return new Promise((resolve, reject) => {
                if (data)
                    resolve(data);
                else
                    reject("failed to load data");
            });
        };
        // calling created promise function
        const showData = () => __awaiter(void 0, void 0, void 0, function* () {
            const res1 = yield createPromise("something");
            const res2 = yield createPromise();
            console.log({ res1, res2 });
        });
        showData();
    }
    {
        const user = {
            name: "Abul",
            email: "abul@mail.com",
            isAdmin: false,
        };
        const createPromise = (data) => {
            return new Promise((resolve, reject) => {
                if (data)
                    resolve(user);
                else
                    reject("failed to load data");
            });
        };
        // calling created promise function
        const showData = () => __awaiter(void 0, void 0, void 0, function* () {
            const res1 = yield createPromise(true);
            const res2 = yield createPromise();
            console.log({ res1, res2 });
        });
        showData();
    }
    const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        return data;
    });
    const todo = getToDo();
    console.log(todo);
}
