{
  // promise

  // simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, resect) => {
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        resect("failed to load data");
      }
    });
  };

  // calling created function
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };

  showData();

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

  getToDo();

  //
}
