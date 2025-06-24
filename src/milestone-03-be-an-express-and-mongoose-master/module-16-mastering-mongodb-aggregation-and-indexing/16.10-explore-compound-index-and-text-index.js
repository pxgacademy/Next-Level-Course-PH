// db.massive_data.createIndex({ email: 1 })
// db.massive_data.createIndex({ about: "text" })
db.massive_data.find({ $text: { $search: "dolor" } });
