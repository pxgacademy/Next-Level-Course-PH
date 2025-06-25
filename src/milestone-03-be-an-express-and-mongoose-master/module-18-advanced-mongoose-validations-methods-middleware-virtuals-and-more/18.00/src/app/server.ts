import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

const uri: string = "mongodb://localhost:27018/module_17";

let server: Server;

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to db");
    server = app.listen(5000, () => {
      console.log(`App is listening on port 5000 from module 17`);
    });
  } catch (error) {
    console.log(error);
  }
})();
