import { db } from "../db.test";

db.test.aggregate([
  {
    $facet: {
      // pipeline-1
      friendsCount: [
        { $unwind: "$friends" },
        { $group: { _id: "$friends", count: { $sum: 1 } } },
      ],
      // pipeline-2
      educationCount: [
        { $unwind: "$education" },
        { $group: { _id: "$education", count: { $sum: 1 } } },
      ],
      // pipeline-3
      skillsCount: [
        { $unwind: "$skills" },
        { $group: { _id: "$skills", count: { $sum: 1 } } },
      ],
    },
  },
]);
