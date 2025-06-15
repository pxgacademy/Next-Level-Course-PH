{
  // NULLABLE TYPE
  const searchName = (value: string | null) =>
    console.log(value ? "Searching" : "Nothing to search");

  searchName("abul");
  searchName(null);

  // UNKNOWN TYPE
  const getSpeedInMeterPerSecond = (value: unknown): void => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);

      //
    } else if (typeof value === "string") {
      const [v] = value.split(" ");
      const convertedSpeed = (parseFloat(v) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);

      //
    } else console.log("wrong input");
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond("1200 kmh^-1");
  getSpeedInMeterPerSecond(null);
  getSpeedInMeterPerSecond([32]);

  // NEVER TYPE
  // never type | this function never return any value
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
}
