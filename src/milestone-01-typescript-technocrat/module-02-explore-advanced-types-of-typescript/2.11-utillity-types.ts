{
  // UTILITY TYPE

  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  // 🔶 PICK
  type Name = Pick<Person, "name">;
  // type Name = { name: string }

  type NameAge = Pick<Person, "name" | "age">;
  // type NameAge = { name: string; age: number }

  // 🔶 OMIT
  type ContactInfo = Omit<Person, "name" | "age">;
  // type ContactInfo = { email?: string | undefined; phone: string }

  // 🔶 REQUIRED
  type PersonRequired = Required<Person>; // every key is required

  // 🔶 PARTIAL
  type PersonPartial = Partial<Person>; // every key is optional

  // 🔶 READONLY
  type PersonReadonly = Readonly<Person>; // every key is readonly, one time can assign

  const person1: PersonReadonly = {
    name: "Abul",
    age: 50,
    phone: "015546444",
  };

  // person1.name = "Babul"; // testing

  /*
  type MyObject = {
    a: string;
    b: string;
    };
    */

  // 🔶 RECORD
  type MyObject = Record<string, string>;
  // type MyObject = { [x: string]: string }

  const objectOne: MyObject = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
  };

  const emptyObject: Record<string, number> = {};
  const emptyObject2: Record<string, unknown> = {};
}
