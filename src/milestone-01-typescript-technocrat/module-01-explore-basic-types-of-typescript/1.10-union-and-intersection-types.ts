{
  // UNION TYPE | INTERSECTION TYPE

  {
    // union type is like 'or' operator
    // 💠 UNION TYPE
    type FrontendDev = "Akib" | "Rakib";
    type BackendDev = "Abul" | "Babul";

    type Developer = FrontendDev | BackendDev;

    const newDev1: FrontendDev = "Akib";
    const newDev2: BackendDev = "Babul";
    const newDev3: Developer = "Babul";

    type User = {
      name: string;
      email: string;
      gender: "Male" | "Female";
      bloodGroup: "O+" | "A+" | "B+" | "A-";
    };
  }

  {
    // intersection type is like 'and' operator
    // 💠 INTERSECTION TYPE
    type FrontendDev = {
      skills: string[];
      designation: "Frontend Developer";
    };

    type BackendDev = {
      skills: string[];
      designation2: "Backend Developer";
    };

    type FullstackDev = FrontendDev & BackendDev;

    const fullstackDev: FullstackDev = {
      skills: ["HTML", "CSS"],
      designation: "Frontend Developer",
      designation2: "Backend Developer",
    };
  }
}
