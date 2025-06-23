import app from "./app";
import { client } from "../config/mongodb";

const port = process.env.PORT || 5000;

(async () => {
  await client.connect();
  console.log("Connected to mongodb");

  app.listen(port, () => {
    console.log(`I am listening from ${port}`);
  });
})();
