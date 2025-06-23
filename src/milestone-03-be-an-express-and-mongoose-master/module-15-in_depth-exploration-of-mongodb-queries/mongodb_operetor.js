const db = {
  test: "",
};

// implicit $and
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

// implicit $and
db.test
  .find({ gender: "Female", age: { $ne: 15, $lte: 30 } })
  .project({ age: 1, gender: 1 })
  .sort({ age: 1 });

// explicit $and
db.test
  .find({
    $and: [{ gender: "Female" }, { age: { $ne: 15 } }, { age: { $lte: 30 } }],
  })
  .project({ age: 1, gender: 1 })
  .sort({ age: 1 });

// implicit $or
db.test
  .find({ "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] } })
  .project({ interests: 1, skills: 1 })
  .sort({ age: 1 });

// explicit $or
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

// Element Query Operators
// $exists
db.test.find({ age: { $exists: false } });
db.test.find({ unknown: { $exists: false } });

// $type
db.test.find({ age: { $type: "string" } });
db.test.find({ friends: { $type: "array" } });
db.test.find({ company: { $type: "null" } });

// $size // only use for array
db.test.find({ friends: { $size: 0 } }); // size can be more than 0

// here interests is an array and Cooking is 2no index
db.test.find({ "interests.2": "Cooking" }).project({ interests: 1 });

// value, and position should be same in the array. // like and operator
db.test
  .find({
    interests: ["Traveling", "Gaming", "Reading"],
  })
  .project({ interests: 1 });

// $all
db.test
  .find({
    interests: { $all: ["Traveling", "Gaming", "Reading"] },
  })
  .project({ interests: 1 });

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

// $elemMatch
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

// $set // update data for primitive data.
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $set: { age: 25 } }
);

// $addToSet doesn't make duplicate
// $addToSet // add value into an array
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $addToSet: {
      interests: "Playing",
    },
  }
);

// $addToSet + $each // add multiple values into an array
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

// $push // push also add value into an array, but push make duplicate
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

// $set // update object
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

// $set // update array of object 👆
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art" },
  {
    $set: {
      "education.$.major": "CSE",
    },
  }
);

// $unset // delete primitive data
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $unset: { birthday: "" },
  }
);

// $pop 1 // delete last value of array, -1 first value of array
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pop: { friends: 1 },
  }
);

// $pull // delete an specific single value from an array
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pull: { friends: "Fahim Ahammed Firoz" },
  }
);

// $pullAll // delete multiple values from an array
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pullAll: { friends: ["Mir Hussain", "Tanmoy Parvez"] },
  }
);

// $inc: increment or decrement (-2) a value
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $inc: { age: 2 } }
);

// crate new collection
db.createCollection("CollectionName");

// delete collection
db.CollectionName.drop({ writeConcern: { w: 1 } });
