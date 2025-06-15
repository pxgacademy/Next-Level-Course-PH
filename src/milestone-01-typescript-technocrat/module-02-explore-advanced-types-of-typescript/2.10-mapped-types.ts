{
  // MAPPED TYPE

  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  // we can covert number[] to string[] using map
  const arrayOfString: string[] = arrayOfNumbers.map((num) => num.toString());
  // arrayOfString will return ["1", "2", "3", "4"]

  /*
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = { // typed manually | we can do in dynamically
    height: string;
    width: string;
  };

  // without typing manually, we will do it dynamically
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
  */

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type Height = AreaNumber["height"]; // look up type

  type Area = {
    height: string;
    width: number;
  };

  type AreaStringGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area: AreaStringGeneric<Area> = {
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
