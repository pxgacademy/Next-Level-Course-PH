"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number")
            return param1 + param2;
        else
            return param1.toString() + param2.toString();
    };
    const getUser = (user) => {
        if ("role" in user)
            console.log(`Name is: ${user.name}, role is: ${user.role}`);
        else
            console.log(`Name is: ${user.name}`);
    };
    //
}
