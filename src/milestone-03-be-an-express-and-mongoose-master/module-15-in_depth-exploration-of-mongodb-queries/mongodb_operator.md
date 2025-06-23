# Mongodb Operator
## implicit $and
```js
db.test.find({ age: { $gt: 18, $lt: 30 } }, { age: 1 }).sort({ age: 1 });
db.test
  .find({ gender: "Female", age: { $gt: 18, $lt: 30 } }, { age: 1 })
  .sort({ age: 1 });

db.test
  .find(
    {
      gender: "Female",
      age: { $in: [18, 20, 22, 24, 27, 38] },
      interests: { $in: ["Cooking", "Gaming"] },
    },
    {
      age: 1,
      gender: 1,
      interests: 1,
    }
  )
  .sort({ age: 1 });
```

## implicit $and
```js
db.test
  .find({ gender: "Female", age: { $ne: 15, $lte: 30 } })
  .project({ age: 1, gender: 1 })
  .sort({ age: 1 });
```

## explicit $and
```js
db.test
  .find({
    $and: [{ gender: "Female" }, { age: { $ne: 15 } }, { age: { $lte: 30 } }],
  })
  .project({ age: 1, gender: 1 })
  .sort({ age: 1 });
```
## implicit $or
```js
db.test
  .find({ "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] } })
  .project({ interests: 1, skills: 1 })
  .sort({ age: 1 });
```
## explicit $or
```js
db.test
  .find({
    $or: [
      { interests: "Travelling" },
      { interests: "Cooking" },
      { "skills.name": "JAVASCRIPT" },
    ],
  })
  .project({ interests: 1, skills: 1 })
  .sort({ age: 1 });
```
Element Query Operators
## $exists
```js
db.test.find({ age: { $exists: false } });
db.test.find({ unknown: { $exists: false } });
```
## $type
```js
db.test.find({ age: { $type: "string" } });
db.test.find({ friends: { $type: "array" } });
db.test.find({ company: { $type: "null" } });
```
## $size
### $size: only use for array
```js
db.test.find({ friends: { $size: 0 } }); // size can be more than 0
```
```js
// here interests is an array and Cooking is 2no index
db.test.find({ "interests.2": "Cooking" }).project({ interests: 1 });

// value, and position should be same in the array. // like and operator
db.test
  .find({
    interests: ["Traveling", "Gaming", "Reading"],
  })
  .project({ interests: 1 });
```
## $all
```js
db.test
  .find({
    interests: { $all: ["Traveling", "Gaming", "Reading"] },
  })
  .project({ interests: 1 });
```
```js
// key, value, and position should be same in the object.
db.test
  .find({
    skills: {
      name: "JAVASCRIPT",
      level: "Intermediate",
      isLearning: false,
    },
  })
  .project({ skills: 1 });
```
## $elemMatch
```js
db.test
  .find({
    skills: {
      $elemMatch: {
        name: "JAVASCRIPT",
        level: "Intermediate",
      },
    },
  })
  .project({ skills: 1 });
```
## $set
### $set: update data for primitive data.
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $set: { age: 25 } }
);
```
## $addToSet
### $addToSet doesn't make duplicate
### $addToSet: add value into an array
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $addToSet: {
      interests: "Playing",
    },
  }
);
```
## $addToSet
### $addToSet + $each: add multiple values into an array
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $addToSet: {
      interests: {
        $each: ["Operating Computer", "Coding"],
      },
    },
  }
);
```
## $push
### $push: push also add value into an array, but push make duplicate
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $push: {
      interests: {
        $each: ["Operating Computer", "Coding"],
      },
    },
  }
);
```

## $set
### $set: update object
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $set: {
      "address.street": "Hathazari",
      "address.city": "Chattogram",
      "address.country": "Bangladesh",
    },
  }
);
```

## $set
### $set: update array of object 👆
```js
/*
"education": [
  {
    degree: "Doctor of Philosophy",
    major: "CSE",
    institute: "Technische University Dresden",
    year: 2003,
  },
  {
    degree: "Master of Science",
    major: "Communications",
    institute: "West Liberty State College",
    year: 2011,
  },
],
*/
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art" },
  {
    $set: {
      "education.$.major": "CSE",
    },
  }
);
```

## $unset
### $unset: delete primitive data
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $unset: { birthday: "" },
  }
);
```
## $pop
### $pop: 1 delete last value of array, -1 first value of array
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pop: { friends: 1 },
  }
);
```
## $pull
### $pull: delete an specific single value from an array
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pull: { friends: "Fahim Ahammed Firoz" },
  }
);
```
## $pullAll
### $pullAll: delete multiple values from an array
```js
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pullAll: { friends: ["Mir Hussain", "Tanmoy Parvez"] },
  }
);
```
## $inc
### $inc: increment or decrement (-2) a value
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $inc: { age: 2 } }
);

```js
// crate new collection
db.createCollection("CollectionName");

// delete collection
db.CollectionName.drop({ writeConcern: { w: 1 } });
```