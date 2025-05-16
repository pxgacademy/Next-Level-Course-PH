{
  // nullable types

  const searchName = (value: string | null) =>
    console.log(value ? "Searching" : "Nothing to search");

  // unknown types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [v] = value.split(" ");
      const convertedSpeed = (parseFloat(v) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else console.log("wrong input");
  };

  // never types

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  //
}
