import { MongoClient, ServerApiVersion } from "mongodb";

const uri: string =
  "mongodb+srv://mongodb_testing:oVXvWyrF5lw0dONc@cluster0.uioun.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
