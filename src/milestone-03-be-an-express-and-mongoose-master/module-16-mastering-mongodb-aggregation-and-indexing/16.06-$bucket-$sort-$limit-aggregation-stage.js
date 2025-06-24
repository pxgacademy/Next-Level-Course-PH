import { db } from "../db.test";

db.test.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 20, 40, 60],
      default: "age of more than 60",
      output: {
        count: { $sum: 1 },
        email: { $push: "$email" },
        // fullDocument: { $push: "$$ROOT" }, // it returns full filtered document
      },
    },
  },
]);

db.test.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 20, 40, 60],
      default: "Grater than 60",
      output: {
        count: { $sum: 1 },
        email: { $push: "$email" },
      },
    },
  },
  { $sort: { count: -1 } },
  { $limit: 2 },
]);
