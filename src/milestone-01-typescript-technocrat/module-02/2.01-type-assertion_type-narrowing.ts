{
  //

  // type assertion

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") return parseFloat(value) * 1000;
    return value * 1000;
  };

  const res1 = kgToGm(10) as number;
  const res2 = kgToGm("10") as string;

  //

  type customError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as customError).message);
  }

  //
}
