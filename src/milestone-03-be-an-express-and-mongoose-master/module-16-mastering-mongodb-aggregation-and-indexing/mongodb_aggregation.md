# Mongodb Aggregation
```js
// both codes will return same result
db.test.find({ gender: "Male" });
db.test.aggregate([{ $match: { gender: "Male" } }]);

db.test.find({ gender: "Male", age: { $gt: 18, $lt: 50 } });
db.test.aggregate([{ $match: { gender: "Male", age: { $gt: 18, $lt: 50 } } }]);

db.test
  .find({ gender: "Male", age: { $gt: 18, $lt: 50 } })
  .project({ name: 1, email: 1, phone: 1 });
db.test.aggregate([
  { $match: { gender: "Male", age: { $gt: 18, $lt: 50 } } },
  { $project: { name: 1, email: 1, phone: 1 } },
]);
```

//

## $addFields
### $addFields: As the $addFields documentation points out. The added fields only apply to the document in the context of the pipeline.
1. That means the original document is not modified.
2. You can add $addFields at any point in the pipeline, deriving fields from the data in previous stages.
```js
db.test.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { course: "Level-2", eduTech: "Programming Hero" } },
  { $project: { name: 1, email: 1, phone: 1, course: 1, eduTech: 1 } },
]);
```
## $out
### $out: save the filtered data to other collection
```js
db.test.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { course: "Level-2", eduTech: "Programming Hero" } },
  { $project: { name: 1, email: 1, phone: 1, course: 1, eduTech: 1 } },
  { $out: "Course_Student" }, // Course_Student is a collection name
]);
```
## $merge
### $merge: merge filtered data to existing collection
```js
db.test.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { course: "Level-2", eduTech: "Programming Hero" } },
  { $project: { course: 1, eduTech: 1 } },
  { $merge: "test" },
]);
```
## $group
```js
db.test.aggregate([
  {
    $group: { _id: "$gender", count: { $sum: 1 }, email: { $push: "$email" } },
  },
]);

db.test.aggregate([
  {
    $group: {
      _id: "$gender",
      count: { $sum: 1 },
      fullDocument: { $push: "$$ROOT" }, // it returns full document into an array
    },
  },
]);

db.test.aggregate([
  {
    $group: {
      _id: "$gender",
      count: { $sum: 1 },
      fullDocument: { $push: "$$ROOT" },
    },
  },
  {
    $project: {
      "fullDocument.name": 1,
      "fullDocument.email": 1,
      "fullDocument.phone": 1,
    },
  },
]);

db.test.aggregate([
  {
    $group: {
      _id: null, // it returns whole document together
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
]);

```
## $project
```js
db.test.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      averageSalary: "$avgSalary",
      rangeBetweenMaxAndMin: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);
```