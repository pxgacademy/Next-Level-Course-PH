import { Request, Response, Router } from "express";
import { User } from "../models/user.model";
import { api_response } from "../components/api_response";

const userRouter = Router();

// create a single user
userRouter.post("/create-one", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const existingUser = await User.findOne({ email: body?.email });
    if (existingUser) {
      api_response(res, 409, false, "User already exist");
      return;
    }

    const user = await User.create(body);
    api_response(res, 201, true, "User created successfully", user);
  } catch (error: any) {
    api_response(res, 500, false, "Internal server error", error?.message);
  }
});

// get all users
userRouter.get("/get-all", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    api_response(res, 200, true, "Successfully got the users", users);
  } catch (error: any) {
    api_response(res, 500, false, "Internal server error", error?.message);
  }
});

// update a single user
userRouter.patch("/update/:userId", async (req: Request, res: Response) => {
  const id = req.params?.userId;
  const body = req.body;

  try {
    const result = await User.findByIdAndUpdate(id, body, { new: true });
    api_response(res, 201, true, "Successfully updated the users", result);
  } catch (error: any) {
    api_response(res, 500, false, "Internal server error", error?.message);
  }
});

// delete a single user
userRouter.delete("/delete/:userId", async (req: Request, res: Response) => {
  const id = req.params?.userId;
  try {
    const result = await User.findByIdAndDelete(id);
    api_response(res, 200, true, "User successfully deleted!", result);
  } catch (error: any) {
    api_response(res, 500, false, "Internal server error", error?.message);
  }
});

export default userRouter;
