"use strict";
{
    // MAPPED TYPE
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    // we can covert number[] to string[] using map
    const arrayOfString = arrayOfNumbers.map((num) => num.toString());
    const area = {
        height: "100",
        width: 100,
    };
    /*
    type AreaStringGeneric<T> = {
      [key in keyof T]: T[key];
    };
    here T = Area
    T[key] = Area[height] = string
    T[key] = Area[width] = number
    tow times looped
    */
}
