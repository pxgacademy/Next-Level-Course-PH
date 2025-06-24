"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_todos_1 = __importDefault(require("./todos/route.todos"));
const user_todos_1 = __importDefault(require("./todos/user.todos"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", route_todos_1.default);
app.use("/users", user_todos_1.default);
app.get("/", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      res.send("I am working from module 14.02");
    } catch (error) {
      next(error);
    }
  })
);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((error, req, res, next) => {
  if (error)
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
});
exports.default = app;
