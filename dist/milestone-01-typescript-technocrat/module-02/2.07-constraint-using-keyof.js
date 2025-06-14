"use strict";
{
    const person1 = "bike";
    const person2 = "bike";
    //
    //   function getValue(obj: object, key: string) {
    //     return obj[key];
    //   }
    function getValue(obj, key) {
        return obj[key];
    }
    const user = {
        name: "Abdul",
        email: "abul@babul.com",
    };
    const value = getValue(user, "name");
    //
}
