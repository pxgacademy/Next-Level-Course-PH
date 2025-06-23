/*

// implicit $and
db.test.find({ age: { $gt: 18, $lt: 30 }, }, { age: 1 }).sort({ age: 1 })
db.test.find({ gender: "Female", age: { $gt: 18, $lt: 30 }, }, { age: 1 }).sort({ age: 1 })

db.test.find(
    {
        gender: "Female",
        age: { $in: [18, 20, 22, 24, 27, 38] },
        interests: { $in: ["Cooking", "Gaming"] }
    },
    {
        age: 1, gender: 1, interests: 1
        }).sort({ age: 1 })
        
        
// implicit $and
db.test.find({gender: "Female", age: { $ne: 15, $lte: 30 } })
    .project({ age: 1, gender: 1 }).sort({ age: 1 })


// explicit $and
db.test.find({
    $and: [
        { gender: "Female" },
        { age: { $ne: 15 } },
        { age: { $lte: 30 } }
        ]
        }).project({ age: 1, gender: 1 }).sort({ age: 1 })



// implicit $or
db.test.find({ "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] } })
    .project({ interests: 1, skills: 1 }).sort({ age: 1 })
        
        
// explicit $or
db.test.find({
    $or: [
        { interests: "Travelling" },
        { interests: "Cooking" },
        { "skills.name": "JAVASCRIPT" }
    ]
}).project({ interests: 1, skills: 1 }).sort({ age: 1 })










 */
