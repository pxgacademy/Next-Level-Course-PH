import { db } from "../db.orders";

db.orders.aggregate([
  {
    $lookup: {
      from: "test",
      localField: "userId", // orders.userId
      foreignField: "_id", // test._id
      as: "user",
    },
  },
]);
