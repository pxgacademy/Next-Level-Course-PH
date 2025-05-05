{
  // ternary operator
  // optional chaining
  // nullish coalescing operator

  // ternary operator
  const age = 15;
  console.log({ isAdult: age > 18 ? "adult" : "not adult" });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Abdullah",
    address: {
      city: "ctg",
      road: "awesome road",
      presentAddress: "ctg road",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? 'none'
  console.log(permanentAddress);

  // nullish coalescing operator
  // null / undefined --> decision making

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest"; // it works only for null or undefined
}
