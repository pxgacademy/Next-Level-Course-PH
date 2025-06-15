{
  // Reference Type => Object

  const user: {
    firstName: string;
    middleName?: string;
    lastName: string;
  } = {
    firstName: "Abdul",
    middleName: "Al Mubin",
    lastName: "Munna",
  };

  type User = {
    company: "New Company"; // literal type
    year: 2025; // literal type
    readonly creator: string; // readonly type, only read access
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
  };

  const newUser: User = {
    company: "New Company",
    year: 2025,
    creator: "Abdullah",
    firstName: "Abul",
    middleName: "Kalam",
    lastName: "Azad",
  };
}
