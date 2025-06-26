"use strict";
{
    // GENERIC FOR FUNCTION
    {
        const createArray = (param) => {
            return [param];
        };
        const res1 = createArray("Ban");
    }
    // T is like a variable
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray("Ban");
    const res2 = createArray(false);
    const res3 = createArray({});
    const res4 = createArray({
        name: "abul",
        age: 50,
    });
    const res5 = createArray({ name: "abul", age: 50 });
    // TUPLE
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Abul", 50);
    const res11 = createArrayWithTuple("user", {
        name: "Abul",
        age: 50,
    });
    //
    const addCourse = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        name: "Abul",
        age: 50,
    });
}
