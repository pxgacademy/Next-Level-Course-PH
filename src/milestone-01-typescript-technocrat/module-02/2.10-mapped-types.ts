{
  // MAPPED TYPE

  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  //   const arrayOfString: string[] = ["1", "2", "3", "4"];
  const arrayOfString: string[] = arrayOfNumbers.map((num) => num.toString());

  //

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type typeString = {
  //     height: string
  //     width: string
  //   }

  //   type AreaString = {
  //     [index in "height" | "width"]: string;
  //   };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     [index in keyof AreaNumber]: string;
  //   };

  //
  //

  // T => { height: string; width: number }
  // T[index] => T['height'] / T[index] => T['width']
  type AreaString<T> = {
    [index in keyof T]: T[index]; // look up type
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
