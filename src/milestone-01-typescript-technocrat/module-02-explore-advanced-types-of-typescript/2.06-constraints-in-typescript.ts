{
  // CONSTRAINTS

  interface MustNeeded {
    id: number;
    name: string;
    age: number;
  }

  const addCourse = <T extends MustNeeded>(student: T) => {
    const course: string = "Next Level Web Development";

    return { ...student, course };
  };

  interface User {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const student1 = addCourse<User>({
    id: 520,
    name: "Abul",
    age: 50,
    email: "abul@example.com",
  });

  const student2 = addCourse({
    id: 520,
    name: "Abul",
    age: 50,
    email: "abul@example.com",
  });
}
