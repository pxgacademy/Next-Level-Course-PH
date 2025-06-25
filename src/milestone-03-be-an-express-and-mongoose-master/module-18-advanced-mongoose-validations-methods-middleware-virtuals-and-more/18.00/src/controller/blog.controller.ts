import { Request, Response, Router } from "express";
import { Blog } from "../models/blog.model";

const blogRouter = Router();

// create a blog
blogRouter.post("/create-blog", async (req: Request, res: Response) => {
  const body = req.body;
  const blog = await Blog.create(body);

  res.status(201).json({
    success: true,
    message: "Successfully created!",
    data: blog,
  });
});

export default blogRouter;
