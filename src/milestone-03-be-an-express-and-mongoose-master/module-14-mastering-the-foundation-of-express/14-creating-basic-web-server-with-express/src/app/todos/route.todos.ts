import { Request, Response, Router } from "express";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

const todoRouter = Router();

// get all todos
todoRouter.get("/all-todos", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todos = collection.find().toArray();

  res.status(200).json(todos);
});

// create a single todos
todoRouter.post("/create-todo", async (req: Request, res: Response) => {
  const data = req.body;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const result = await collection.insertOne(data);

  res.status(201).json(result);
});

// delete a single todos
todoRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  res.json(result);
});

// update isCompleted status
todoRouter.patch(
  "/update-todo-status/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    res.json(result);
  }
);

// update a single todos
todoRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: body },
    { upsert: true }
  );

  res.json(result);
});

export default todoRouter;
