"use strict";
{
    const addCourse = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 520,
        name: "Abul",
        age: 50,
        email: "abul@example.com",
    });
    const student2 = addCourse({
        id: 520,
        name: "Abul",
        age: 50,
        email: "abul@example.com",
    });
}
