"use strict";
{
    // destructuring
    // object destructuring
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
    const { id, name: { firstName }, address: country, // name alias | store address into country variable
     } = user;
    // array destructuring
    const friends = ["Abdul", "Babul", "Monica", "ross", "rachel"];
    const [, b, c, ...d] = friends;
}
