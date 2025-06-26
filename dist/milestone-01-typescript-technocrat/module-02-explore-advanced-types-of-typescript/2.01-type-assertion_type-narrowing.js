"use strict";
{
    const kgToGm = (value) => {
        if (typeof value === "string")
            return parseFloat(value) * 1000;
        return `The converted value is: ${value * 1000}`;
    };
    const res1 = kgToGm(10); // set return type is number
    const res2 = kgToGm("10"); // set return type is string
    try {
    }
    catch (error) {
        const errorMessage = error.message;
    }
}
