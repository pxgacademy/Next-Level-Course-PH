"use strict";
{
    const person1 = "bike";
    const person2 = "car";
    const user = {
        name: "Abdul",
        email: "abul@babul.com",
    };
    /*
    function getPropertyValue(obj: object, key: string) {
      return obj[key];
    }
      
    const value = getPropertyValue(user, "name");
    */
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    const value = getPropertyValue(user, "name");
}
