{
  // function with generic

  // const createArray = (param: string): string[] => {
  //     return [param]
  // }
  // const res1 = createArray('Ban')

  const createArray = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray<string>("Ban");
  const res2 = createArray<boolean>(false);
  const res3 = createArray<object>({});
  const res4 = createArray<{ name: string; age: number }>({
    name: "abul",
    age: 50,
  });

  interface User {
    name: string;
    age: number;
  }
  const res5 = createArray<User>({ name: "abul", age: 50 });

  // Tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Abul", 50);
  const res11 = createArrayWithTuple<string, User>("user", {
    name: "Abul",
    age: 50,
  });

  //

  const addCourse = <T>(student: T) => {
    const course: string = "Next Level Web Development";

    return { ...student, course };
  };

  const student1 = addCourse<{ name: string; age: number }>({
    name: "Abul",
    age: 50,
  });

  //
}
