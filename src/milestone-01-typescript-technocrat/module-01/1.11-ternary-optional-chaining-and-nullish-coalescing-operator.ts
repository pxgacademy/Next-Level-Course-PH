{
  // 💠 TERNARY OPERATOR
  // 💠 OPTIONAL CHAINING
  // 💠 NULLISH COALESCING OPERATOR

  // ternary operator
  const age = 15;
  const isAdult = age > 18 ? "adult" : "not adult";

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string; // optional type
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

  const address = user?.address?.permanentAddress ?? "none"; // optional chaining

  // nullish coalescing operator
  // null / undefined --> decision making

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest"; // it works only for null or undefined
}
