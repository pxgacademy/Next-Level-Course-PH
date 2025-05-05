"use strict";
{
    //
    // type assertion
    const kgToGm = (value) => {
        if (typeof value === "string")
            return parseFloat(value) * 1000;
        return value * 1000;
    };
    const res1 = kgToGm(10);
    const res2 = kgToGm("10");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
