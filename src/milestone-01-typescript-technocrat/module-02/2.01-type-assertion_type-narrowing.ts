{
  // TYPE ASSERTION
  type KgToGm = (value: string | number) => string | number | undefined;

  const kgToGm: KgToGm = (value) => {
    if (typeof value === "string") return parseFloat(value) * 1000;
    return `The converted value is: ${value * 1000}`;
  };

  const res1 = kgToGm(10) as number; // set return type is number
  const res2 = kgToGm("10") as string; // set return type is string

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    const errorMessage = (error as CustomError).message;
  }
}
