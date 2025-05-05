"use strict";
{
    // nullable types
    const searchName = (value) => console.log(value ? "Searching" : "Nothing to search");
    // unknown types
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [v] = value.split(" ");
            const convertedSpeed = (parseFloat(v) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else
            console.log("wrong input");
    };
    // never types
    const throwError = (msg) => {
        throw new Error(msg);
    };
    //
}
