import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import todoRouter from "./todos/route.todos";
import userRouter from "./todos/user.todos";
const app: Application = express();

app.use(express.json());
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("I am working from module 14.02");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error)
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
});

export default app;
