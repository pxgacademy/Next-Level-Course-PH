{
  // PROMISE
  // ASYNCHRONOUS TYPESCRIPT

  // SIMULATE
  {
    const createPromise = (data?: string): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        if (data) resolve(data);
        else reject("failed to load data");
      });
    };

    // calling created promise function
    const showData = async () => {
      const res1: string = await createPromise("something");
      const res2: string = await createPromise();
      console.log({ res1, res2 });
    };

    showData();
  }

  {
    interface User {
      name: string;
      email: string;
      isAdmin: boolean;
    }

    const user = {
      name: "Abul",
      email: "abul@mail.com",
      isAdmin: false,
    };

    const createPromise = (data?: boolean): Promise<User | string> => {
      return new Promise<User | string>((resolve, reject) => {
        if (data) resolve(user);
        else reject("failed to load data");
      });
    };

    // calling created promise function
    const showData = async () => {
      const res1: User | string = await createPromise(true);
      const res2: User | string = await createPromise();
      console.log({ res1, res2 });
    };

    showData();
  }

  //

  interface ToDo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  const todo = getToDo();
  console.log(todo);
}
