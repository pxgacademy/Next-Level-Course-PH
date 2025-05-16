{
  // utility type
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  // Pick
  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>; // every key is required

  // Partial
  type PersonPartial = Partial<Person>; // every key is optional

  // Readonly
  type PersonReadonly = Readonly<Person>; // every key is readonly, one time can assign

  const person1: PersonReadonly = {
    name: "Abul",
    age: 50,
    phone: "015546444",
  };
  //   person1.name = "Babul"; // testing

  // Record
  //   type MyObject = {
  //     a: string;
  //     b: string;
  //   };

  type MyObject = Record<string, string>;

  const objectOne: MyObject = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
  };

  const emptyObject: Record<string, number> = {};

  //
}
