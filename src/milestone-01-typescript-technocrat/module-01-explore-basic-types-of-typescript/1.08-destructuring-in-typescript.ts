{
  // DESTRUCTURING

  const student = {
    name: "Abul",
    roll: 988,
    subject: "History",
    present: false,
  };

  // 🟢 BASIC OBJECT DESTRUCTURING
  const { name, roll, subject, present } = student;

  const user = {
    id: 3256,
    name: {
      firstName: "Abul",
      middleName: "Babul",
      lastName: "Tabul",
    },
    contact: {
      phone: "01659455236",
      email: "abul@babul.com",
    },
    address: "Uganda",
  };

  // 🔵 COMPLEX OBJECT DESTRUCTURING
  const {
    id, // basic destructuring
    name: { firstName }, // destructure from name key
    address: country, // name alias | store address into country variable
    contact: { phone: call }, // destructure | name alias
  } = user;

  // 🟣 ARRAY DESTRUCTURING
  const friends = ["Abdul", "Babul", "Monica", "ross", "rachel"];

  const [, b, c, ...d] = friends;
}
